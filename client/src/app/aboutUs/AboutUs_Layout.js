import AOSWrapper from '@/components/common/AOSWrapper'
import Heading from '@/components/layouts/Heading'
import HeroSection from '@/components/layouts/HeroSection'
import Image from 'next/image'
import React from 'react'

const AboutUs_Layout = () => {
  return (
    <div className='pb-5'
    >
      <HeroSection
        heading={"ABOUT US"}
        desc={"We Are BizzView, In Bussiness Sin 1989"}
        data-aos="fade-up"
      />
      <AOSWrapper>
        <div className='layout-container bg-primary-bgColor/70 text-theme-text backdrop-blur-md p-5 md:p-10 rounded-xl space-y-4 overflow-hidden'>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto nostrum corrupti voluptas magni incidunt atque, fugit expedita nobis praesentium consequuntur exercitationem in obcaecati laudantium vel libero nam quis aspernatur minima commodi porro corporis voluptate. Veniam sunt, magni iusto consectetur cum blanditiis porro incidunt quasi quo commodi doloribus veritatis optio esse aliquid architecto delectus eveniet obcaecati perspiciatis eum nihil numquam! Totam ab quidem, soluta aliquam expedita sint dolorem inventore placeat aliquid laboriosam error tempore at neque eos accusantium iusto quae impedit iste illo obcaecati porro minima voluptatibus. Odio architecto illo officia quaerat necessitatibus, corrupti deleniti reiciendis quod aut rerum delectus.
          </p>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto nostrum corrupti voluptas magni incidunt atque, fugit expedita nobis praesentium consequuntur exercitationem in obcaecati laudantium vel libero nam quis aspernatur minima commodi porro corporis voluptate. Veniam sunt, magni iusto consectetur cum blanditiis porro incidunt.
          </p>
          <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut iusto nostrum corrupti voluptas magni incidunt atque, fugit expedita nobis praesentium consequuntur exercitationem in obcaecati laudantium vel libero nam quis aspernatur minima commodi porro corporis voluptate. Veniam sunt, magni iusto consectetur cum blanditiis porro incidunt quasi quo commodi doloribus veritatis optio esse aliquid architecto delectus eveniet obcaecati perspiciatis eum nihil numquam! Totam ab quidem, soluta aliquam expedita sint dolorem inventore placeat aliquid laboriosam error tempore at neque eos accusantium iusto quae impedit iste illo obcaecati porro minima voluptatibus. Odio architecto illo officia quaerat necessitatibus, corrupti deleniti reiciendis quod aut rerum delectus.
          </p>
          <div className='flex flex-col md:flex-row items-center justify-center gap-3 mt-10'>
            <div className='flex items-center justify-center'>
              <Image
                src={"/assets/hero2.jpg"}
                width={600}
                height={800}
                alt="about_last"
                className='rounded-xl'
              />
            </div>
            <div className='space-y-3'>
              <Heading
                desc={"Customer for us."}
                className='font-semibold text-center text-xl'
                data-aos="fade-right"
                data-aos-offset="50"
              />
              <ul className='text-sm list-disc mx-10 space-y-1'
                data-aos="fade-left"
                data-aos-offset="50"
              >
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, assumenda?
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, assumenda?
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, assumenda?
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, assumenda?
                </li>
                <li>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo, assumenda?
                </li>
              </ul>
            </div>
          </div>
          <div className='text-center text-2xl '>
            Thank You.
          </div>
        </div>
      </AOSWrapper >
    </div >

  )
}

export default AboutUs_Layout