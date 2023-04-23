import { useState } from 'react'
//Service
//Dispatch
import { useAppDispatch } from '../hooks'
import { getMovements } from '../../services/app.service'
import { setMovementesData } from '../movementsSlice'

export const usefetchMovements = () => {
  const dispatch = useAppDispatch()
  const [success, setSuccess] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errors, setErrors] = useState<boolean>(false);

  const fetchMovements_execute = async () => {
    setLoading(true);
    try {
      const data = await getMovements();
      if (data) {
        dispatch(setMovementesData(data))
        setErrors(false);
        setLoading(false);
        setSuccess(true);
      }
    } catch (error: any) {
      setErrors(true)
      console.log(error)
      setLoading(false);
    }
  };
  return {
    fetchMovements_execute,
    success,
    loading,
    errors,
  };
};
