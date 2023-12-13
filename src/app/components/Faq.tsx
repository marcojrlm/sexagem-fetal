import Image from 'next/image'

const Faq = () => {
  return (
    <section className='bg-neutral px-4 py-8 text-gray'>
      <div className='max-w-4xl m-auto'>
        <p className='text-primarycolor text-center text-3xl font-semibold'>Perguntas frequentes</p>
        <ul className='flex flex-col gap-6 py-8'>
          <li><strong>O que é a sexagem fetal?</strong>
            <p>É um exame de sangue que tem como objetivo a descoberta do sexo do bebê de maneira antecipada.</p>
          </li>
          <li><strong>Quando é possível fazer a sexagem fetal?</strong>
            <p>O exame de sexagem pode ser feito a partir da 8ª semana completa de gestação e tem taxa de confiabilidade de 99%. No caso de esperar pela ecografia, normalmente só é possível descobrir o sexo do bebê a partir de 13 ou 14 semanas.</p>
          </li>
          <li><strong>Como funciona a sexagem fetal?</strong>
            <p>É um exame de sangue (dois tubos) normal que visa buscar traços do cromossomo Y no plasma da mãe. Como o Y é um cromossomo exclusivamente masculino, se estiver presente no sangue, o bebê é menino. Sua ausência indica que é uma menina.</p>
          </li>
          <li><strong>Há alguma contraindicação?</strong>
            <p>Uma contraindicação é para gestantes que receberam sangue ou passaram por um transplante de órgãos ou de medula, no qual o doador era homem. Nesses casos, o resultado pode ser falso, visto que assim seria possível encontrar o cromossomo Y mesmo na gestação de um bebê do sexo feminino.</p>
          </li>
          <li><strong>O plano de saúde cobre?</strong>
            <p>A Agência Nacional de Saúde (ANS) não inclui o exame de sexagem fetal no rol de procedimentos, ou seja, os planos de saúde não são obrigados a cobri-lo ou reembolsá-lo. Entretanto, há alguns planos que englobam o exame em sua cobertura.</p>
          </li>
          <li><strong>O uso de medicamentos pode interferir no resultado do exame?</strong>
            <p>Sim, medicamentos anticoagulantes à base de heparina podem inibir o teste, levando a resultados inconclusivos. Nesses casos, recomendamos conversar com o seu médico para solicitar a suspensão temporária do medicamento, previamente à coleta (24 horas).</p>
          </li>
          <li><strong>A Sexagem Fetal substitui os exames pré-natais?</strong>
            <p>Não. O exame de sexagem fetal tem finalidade exclusiva de determinar o sexo do bebê. Portanto, não substitui os exames pré-natais tradicionais, que são essenciais para a avaliação do desenvolvimento fetal e a detecção de possíveis anomalias genéticas.</p>
          </li>
          <li><strong>É possível realizar a Sexagem Fetal em gestações de gêmeos?</strong>
            <p>Sim, na gestação gemelar, o teste de sexagem fetal identifica ambos os sexos dos gêmeos univitelinos (gestação monozigótica), pois ambos compartilham o mesmo sexo. Para gêmeos bivitelinos (gestação dizigótica) com resultado masculino, o teste indica a presença de pelo menos um menino, não podendo esclarecer o sexo do outro feto. A ausência de cromossomo Y indica que ambos os sexos dos fetos são femininos, tanto na gestação univitelina quanto na bivitelina.</p>
          </li>
        </ul>
      </div>
    </section>
  );
}
export default Faq;
