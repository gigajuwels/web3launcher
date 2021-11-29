import {useState, useEffect, useCallback} from 'react';
import Web3Modal from "web3modal";
import { ethers } from 'ethers';

const web3Modal = new Web3Modal({
  network: 'fuji',
  cacheProvider: true,
  theme: "dark"
});

export default function useWeb3() {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [loading, setLoading] = useState(true);
  const [address, setAddress] = useState("");

  useEffect(() => {
    async function loadWeb3() {
      if (loading) {
        if (web3Modal.cachedProvider) {
          const provider = await web3Modal.connect();
          const ethersProvider = new ethers.providers.Web3Provider(provider);
          const ethersSigner = ethersProvider.getSigner();
          const signerAddress = await ethersSigner.getAddress();

          setProvider(ethersProvider);
          setSigner(ethersSigner);
          setAddress(signerAddress);
        }
        
        setLoading(false);
      }
    }

    loadWeb3();
  });

  const connect = useCallback(
    async () => {
      const provider = await web3Modal.connect();
      const ethersProvider = new ethers.providers.Web3Provider(provider);
      const ethersSigner = ethersProvider.getSigner();
      const signerAddress = await ethersSigner.getAddress();

      setProvider(ethersProvider);
      setSigner(ethersSigner);
      setAddress(signerAddress);

      return ethersSigner;
    },
    []
  );

  const connected = provider && signer && !loading;

  return {
    provider,
    signer,
    connected,
    connect,
    loading,
    address
  };
}