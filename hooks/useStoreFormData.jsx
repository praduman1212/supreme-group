import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../firebase';

const useStoreFormData = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const storeFormData = async (formData) => {
    setIsLoading(true);
    setError(null);
    
    try {
      const formDataCollection = collection(db, 'FormData');
      await addDoc(formDataCollection, {
        ...formData,
        timestamp: new Date(),
      });
      setIsLoading(false);
      return true;
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
      return false;
    }
  };

  return { storeFormData, isLoading, error };
};

export default useStoreFormData;
