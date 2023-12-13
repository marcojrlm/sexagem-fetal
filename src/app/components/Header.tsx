import Image from 'next/image'

const Header = () => {
  return (
    <header className='w-full h-[90vh] md:h-[50vh] lg:h-[75vh] bg-gradient-to-b md:bg-gradient-to-r lg:bg-gradient-to-r from-blue to-pink flex justify-center'>
      <div className='max-w-4xl flex flex-col md:flex-row lg:flex-row items-center py-6'>
        <img
          alt='mulher grávida'
          src='/woman.png'
          className='w-96 lg:w-[460px]'
        />
        <div className='flex flex-col p-6'>
          <p className='text-2xl'>É menino ou menina?</p>
          <p className='text-3xl font-bold'>Descubra o sexo do seu bebê a partir da 8ª semana de gestação!</p>
          <p className='text-md py-6'>Agende agora o exame de sexagfem fetale antecipe a emoção com apenas uma amostra de sangue materno!</p>
          <button className='w-11/12 py-3 rounded-sm bg-primarycolor'>Quero agendar meu exame!</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
