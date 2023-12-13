import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='bg-primarycolor p-4 py-10'>
      <div className='max-w-4xl flex flex-col lg:flex-row lg:gap-16 lg:items-center items-center gap-8 m-auto'>
        <div className='flex flex-col gap-4'>
          <Image
            alt='mulher grávida'
            src='/logos2.png'
            width={140}
            height={100}
          />
          <Image
            alt='mulher grávida'
            src='/logodb.png'
            width={140}
            height={100}
          />
        </div>
        <p className='text-sm'>Uma iniciativa do DB Diagnósticos para transformação digital de laboratórios, clínicas e profissionais da área da Saúde.</p>
      </div>
    </footer>
  );
}
export default Footer;
