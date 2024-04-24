import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import { BsLinkedin, BsInstagram, BsGithub } from 'react-icons/bs';

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-gray-300'>
      <div className='w-full max-w-7xl mx-auto'>
        <div className='grid w-full justify-between sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-lg text-white'>
                Earthly Expedition Logs
              </span>
            </Link>
          </div>
          <div className='grid grid-cols-2 gap-8 mt-4 sm:grid-cols-2 sm:gap-6'>
            <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Earthly Expedition Logs
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms of Service</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            by='Earthly Expedition Logs'
            year={new Date().getFullYear()}
          />
          <div className='flex gap-6 sm:mt-0 mt-4 sm:justify-center'>
            <Footer.Icon
              href='https://www.linkedin.com/in/leshichen/'
              icon={BsLinkedin}
            />
            <Footer.Icon
              href='https://github.com/imOnVacation'
              icon={BsGithub}
            />
            <Footer.Icon
              href='https://www.instagram.com/leshichenn/'
              icon={BsInstagram}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
