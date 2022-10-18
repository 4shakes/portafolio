import React from 'react';

// import contact data
import { contact } from '../data';
import { FaWhatsapp } from 'react-icons/fa';
import { useForm } from '../hooks/useForm';

const Contact = () => {
  const { nombre, correo, asunto, mensaje, onChange, reset } = useForm({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: ''
  })
  const sendMessage = (e) => {
    e.preventDefault()
    if (nombre.trim().length <= 1 && correo.trim().length <= 1 && asunto.trim().length <= 1 && mensaje.trim().length <= 1) return
    const numberCellPhone = 51921517958
    const urlMobile = `https://api.whatsapp.com/send?phone=+${numberCellPhone}`;

    const messageWhatsApp = `urlMobile &text=*_Formulario a traves de Whatsapp_*%0A*¿Cual es tu nombre?*%0A ${nombre} %0A*¿Cuál es tu correo?*%0A ${correo}  %0A*¿Cuál es el asunto?*%0A ${asunto} %0A*¿Cuál es el mensaje?*%0A ${mensaje}`
    /* console.log(messageWhatsApp) */
    reset()
    return window.open(urlMobile + messageWhatsApp, '_blank')

  }


  return (
    <section className='section bg-primary' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col items-center text-center relative'>
          <span className="hidden lg:block lg:-top-2 absolute stroke uppercase">
            Contactame
          </span>
          <h2 className='section-title  relative'>
            Estemos en contacto
          </h2>
          <p className='subtitle'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga veniam
            labore nisium illum cupiditate reiciendis a numquam
          </p>
        </div>
        <div
          className='flex flex-col lg:gap-x-8 lg:flex-row'
        >
          <div
            className='flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2'
          >
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className='flex flex-col lg:flex-row gap-x-4' key={index}>
                  <div className='text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl'>
                    {icon}
                  </div>
                  <div>
                    <h4 className='font-body text-xl mb-1'>{title}</h4>
                    <p className='mb-1 text-paragraph'>{subtitle}</p>
                    <a href="mailto:cuenta@deemail.com"></a>
                    <a href={`mailto:${description}`} className='text-accent font-normal '>{description}</a>
                  </div>
                </div>
              );
            })}
          </div>
          <form

            className='space-y-8 w-full max-w-[780px]'
          >

            <div className='flex gap-8 '>
              <div className="relative  w-full">
                <input id='nombre' value={nombre} name='nombre' onChange={onChange} className=' font-body pr-4 pb-2.5 pt-4 pl-5 w-full text-paragraph h-[60px] text-[15px] rounded-sm bg-secondary border-1 border-gray-300 outline-none focus:outline focus:outline-1 focus:outline-accent peer' type='text' placeholder=' ' />
                <label for="nombre" class="absolute font-body text-[15px] text-paragraph duration-300 transform -translate-y-4 scale-75 top-4 z-[1] origin-[0] bg-transparent peer-focus:bg-secondary border-gray-300 px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Nombre</label>
              </div>
              <div className="relative w-full">
                <input id='correo' value={correo} name='correo' onChange={onChange} className=' font-body pr-4 pb-2.5 pt-4 pl-5 w-full text-paragraph h-[60px] text-[15px] rounded-sm bg-secondary border-1 border-gray-300 outline-none focus:outline focus:outline-1 focus:outline-accent peer' type='text' placeholder=' ' />
                <label for="correo" class="absolute font-body text-[15px] text-paragraph duration-300 transform -translate-y-4 scale-75 top-4 z-[1] origin-[0] bg-transparent peer-focus:bg-secondary border-gray-300 px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Correo</label>
              </div>
            </div>
            <div className="relative w-full">
              <input id='asunto' value={asunto} name='asunto' onChange={onChange} className=' font-body pr-4 pb-2.5 pt-4 pl-5 w-full text-paragraph h-[60px] text-[15px] rounded-sm bg-secondary border-1 border-gray-300 outline-none focus:outline focus:outline-1 focus:outline-accent peer' type='text' placeholder=' ' />
              <label for="asunto" class="absolute font-body text-[15px] text-paragraph duration-300 transform -translate-y-4 scale-75 top-4 z-[1] origin-[0] bg-transparent peer-focus:bg-secondary border-gray-300 px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-4 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Asunto</label>
            </div>

            <div className="relative w-full">
              <textarea id='mensaje' value={mensaje} name='mensaje' onChange={onChange} className=' font-body pr-4 pb-2.5 pt-6 pl-5 w-full text-paragraph h-[200px] text-[15px] rounded-sm bg-secondary border-1 border-gray-300 outline-none focus:outline focus:outline-1 focus:outline-accent peer' type='text' placeholder=' ' ></textarea>
              <label for="mensaje" class="absolute font-body text-[15px] text-paragraph duration-300 transform -translate-y-4 scale-75 top-5 z-[1] origin-[0] bg-transparent peer-focus:bg-secondary border-gray-300 px-2 peer-focus:px-2 peer-focus:text-accent peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-[80px] peer-placeholder-shown:top-1/2 peer-focus:top-5 peer-focus:scale-75 peer-focus:-translate-y-4 left-4">Mensaje</label>
            </div>
            <button className='btn btn-lg bg-accent hover:bg-secondary-hover ' onClick={sendMessage}>
              <div className="flex items-center gap-x-2">
                <FaWhatsapp className="w-6 h-6" />
                Enviar Mensaje
              </div>

            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
