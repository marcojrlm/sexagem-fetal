import Image from 'next/image'

const Promotion = () => {
  return (
    <section className='bg-white px-4 py-8 text-gray'>
      <div className='max-w-4xl m-auto flex flex-col items-center'>
        <div className='flex flex-col lg:flex-row justify-between items-center'>
          <div className='lg:w-1/2'>
            <p className='text-primarycolor text-lg font-bold'>Nesse momento tão especial da vida, um turbilhão de emoções passa pela nossa cabeça e acelera o nosso coração! São tantas dúvidas:</p>
            <ul className='py-4'>
              <li><strong className='text-secondaryColor pr-2'>+</strong>É menino ou menina?</li>
              <li><strong className='text-secondaryColor pr-2'>+</strong>Quais nomes mais gostamos?</li>
              <li><strong className='text-secondaryColor pr-2'>+</strong>Como será meu parto?</li>
              <li><strong className='text-secondaryColor pr-2'>+</strong>Quais serão as cores do quartinho do bebê?</li>
              <li><strong className='text-secondaryColor pr-2'>+</strong>Quando começar a montar o enxoval?</li>
              <li><strong className='text-secondaryColor pr-2'>+</strong>Estamos realmente preparados?</li>
            </ul>
            <p>Nós entendemos toda essa ansiedade que acompanha a gestação! E por este motivo, selecionamos uma rede de laboratórios parceiros para ajudar você a começar a <strong>planejar essa linda jornada chamada maternidade!</strong></p>
            <p className='text-primarycolor font-bold pt-6'>Realize agora o exame de SEXAGEM FETAL e descubra o sexo do bebê por apenas</p>
            <p className='text-secondaryColor text-4xl font-semibold py-4'><span className='text-base'>R$</span>197<span className='text-base'>,00</span></p>
            <button className='text-white bg-secondaryColor rounded-md w-3/4 py-4'>Agendar exame agora!</button>
          </div>

          <img
            alt='bebe'
            src='/bebe.jpeg'
            className='py-12 h-1/2'
          />
        </div>

        <div className='bg-neutral w-screen lg:w-full -mx-4 lg:mx-0 my-16 px-4 lg:px-20 flex flex-col items-center'>
          <p className='text-primarycolor text-3xl font-semibold text-center py-8'>O que é o exame de sexagem fetal?</p>
          <p>Para a realização do exame de sexagem fetal, é utilizado como material biológico uma amostra de sangue materno (plasma). É um teste não-invasivo que pode ser realizado a partir da 8ª semana de gestação, possuindo índices de acertos superiores a 99% quando coletado no período estabelecido pelo laboratório.
            <br /><br />
            O teste detecta fragmentos do cromossomo Y circulantes no plasma da mãe. Como esses fragmentos são exclusivos dos indivíduos do sexo masculino, a presença dessa fração no sangue da mãe indica a gestação do sexo masculino, enquanto sua ausência, indica sexo feminino.
            <br /><br />
            Você não precisa recorrer às práticas caseiras e simpatias para saber o sexo do seu bebê.</p>
          <p className='text-primarycolor font-semibold py-4'>Realize seu exame com o maior laboratório do Brasil através da nossa rede de parceiros e descubra se o seu bebê é menino ou menina!</p>
          <button className='bg-primarycolor text-white font-semibold w-full lg:w-3/4 p-3 rounded-sm my-8'>Saiba como agendar seu exame de Sexagem Fetal</button>
        </div>

        <div className='w-full md:w-2/3 lg:w-1/2 m-auto h-48 md:h-60 lg:h-60'>
          <iframe width='100%' height="100%" src="https://www.youtube.com/embed/KRedXmBOctQ" frameborder="0" allowfullscreen></iframe>
        </div>
        <div className='w-full border-b border-dashed mt-10 mb-8'></div>
        <p className='text-primarycolor text-3xl font-semibold text-center py-8'>Qual a confiabilidade do teste de Sexagem Fetal?</p>
        <p className='text-base'>O teste de sexagem fetal apresenta <span className='text-secondaryColor'>99% de sensibilidade.</span> O exame é capaz de identificar o sexo do bebê a partir da <strong>8ª semana completa de gestação</strong>, enquanto o ultrassom (US) somente próximo da 13ª semana. Por este motivo, podem ocorrer divergências entre o US e o teste molecular, dependendo do período em que os exames forem comparados.</p>
        <p className='text-primarycolor py-6 text-base font-semibold'>Conte com uma equipe de profissionais altamente qualificada e equipamentos de última geração para realizar seu exame de sexagem fetal com maior segurança e eficiência.</p>
        <button className='text-white bg-secondaryColor rounded-md w-full md:w-1/2 lg:w-1/2 m-auto py-3 font-bold'>QUERO AGENDAR MEU EXAME!</button>

      </div>
    </section>
  );
}
export default Promotion;
