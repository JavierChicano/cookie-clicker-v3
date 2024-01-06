// useWindowSize.js
import { useEffect, useState } from 'react';

const useWindowSize = () => {
  const [lg, setLg] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Establecer lg como verdadero si el ancho de la pantalla es mayor o igual a 1024 píxeles
      setLg(window.innerWidth >= 1024);
    };

    // Llamar a handleResize al cargar la página
    handleResize();

    // Agregar un listener de cambio de tamaño para actualizar lg cuando cambie el ancho de la ventana
    window.addEventListener('resize', handleResize);

    // Limpiar el listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return lg;
};

export default useWindowSize;
