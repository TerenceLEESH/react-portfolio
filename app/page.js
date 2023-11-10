import Head from 'next/head'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillTwitterCircle, AiFillLinkedin, AiFillInstagram} from 'react-icons/ai';
import Image from "next/image";
import deved from '../public/dev-ed-wave.png';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Terence Lee Portfolio</title>
        <mata name="description" content=""></mata>
        <link rel="icon" href="/favicon.ico"></link>
      </Head>
      <main className ='bg-white px-10'>
        <section className='min-h-screen'>
          <nav className='py-10 mb-12 flex justify-between'>
            <h1 className="text-xl font-burtons">Home</h1>
            <h1 className="text-xl font-burtons">Experience</h1>
            <h1 className="text-xl font-burtons">Skills</h1>
            <h1 className="text-xl font-burtons">Projects</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-2xl"/>
              </li>
              <li>
                <a className=" bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a>
              </li>
            </ul>
          </nav>
          <div className ="text-center p-10">
            <h2 className = "text-5xl py-2 text-teal-600 font-meida">Terence Lee</h2>
            <h3 className = "text-2xl py-2">Software Engineer.</h3>
            <p className="text-md py-5 leading-8 text-gray-800">
              I do major in Computer Engineering. I have experience in Web, App and Game Development. 
              I aim to become a successful Software/Data Engineer in the future.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle/>
            <AiFillLinkedin/>
            <AiFillInstagram/>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 overflow-hidden">
            <Image src={deved} layout="fill" objectFit="cover"/>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-2 leading-8 text-gray-800">
              sddsdsasf fdsfds <span className="text-teal-500">dsfs dsf </span>fds f ds dsfdsf ds sdfs
            </p>
            <p className="text-md py-2 leading-8 text-gray-800">
              sddsdsasf fdsfds <span className="text-teal-500">dsfs dsf </span>fds f ds dsfdsf ds sdfs
            </p>
          </div>
          <div>
            
          </div>
        </section>
      </main>
    </div>
  )
}
