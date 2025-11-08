"use client"
import AOSWrapper from "@/components/common/AOSWrapper";
import Heading from "@/components/layouts/Heading";
import ProductBox from "@/components/layouts/ProductBox";
import { useGeneralContext } from "@/contexts/generalContext";
import Image from "next/image";
import Link from "next/link";
import CountUp from "react-countup";


export default function Home() {

  const generalContext = useGeneralContext();

  return (
    <>
      {/* 🌟 Hero Section */}
      <section className="relative w-full h-screen bg-gray-900">
        <Image
          src="/assets/hero1.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col justify-center overflow-hidden px-4 md:px-10">
          <div className="absolute bottom-10 lg:bottom-1/2 lg:translate-y-1/2 space-y-2">
            <h1 className="text-white/90 text-5xl md:text-5xl font-extrabold font-oswald whitespace-pre-line uppercase"
              data-aos="fade-right"
              data-aos-offset="0"
            >
              Good Product<br /> Good Life
            </h1>
            <h1
              className="text-white/90 text-sm md:text-sm"
              data-aos="fade-right"
              data-aos-offset="0"
            >
              Your trusted partner in global trade. <br /> We deliver premium products across borders with efficiency and reliability.
            </h1>
          </div>
        </div>
      </section>


      {/* <<=== MAIN =  Welcome Section */}
      <AOSWrapper>
        <section className="layout-container py-20">
          <div className="space-y-10">
            <Heading
              desc={"We Are BizzView"}
              className={"text-center"}
            />
            <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-10">
              <div
                className="md:w-[40%] flex items-center justify-center"
              >
                <Image
                  src={"/assets/hero6.jpg"}
                  width={450}
                  height={500}
                  alt="WelcomgImg"
                  className="rounded-3xl"
                />
              </div>
              <p
                className="flex-1"
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
                consequuntur nemo delectus consequatur, omnis praesentium itaque.
                Quas deserunt vel at consequuntur aperiam itaque molestiae harum alias
                corporis. In atque ipsa adipisci nostrum earum excepturi fuga natus
                beatae veniam aliquid iste rem, minus quis autem deleniti sit tenetur.
                Ea modi veniam iusto eaque, vitae ducimus, impedit tenetur debitis
                doloribus quos omnis ratione dolore sapiente quaerat? Magni nesciunt
                tempora natus! Reprehenderit veritatis dolor officiis saepe dicta est
                quasi, quisquam deleniti vitae necessitatibus tempora iste eum quia ab
                rem accusantium iure. Facere cupiditate, sit explicabo eaque in
                soluta. Quaerat similique eum ipsa nobis.
              </p>
            </div>
          </div>
        </section>
      </AOSWrapper>


      {/* <<=== MAIN = Our Products */}
      <AOSWrapper>
        <section className="py-20 leading-relaxed bg-primary-bgColor/90">
          <div className="space-y-10">
            <Heading
              desc={"Our Products"}
              className={"text-center text-theme-text"}
            />
            <div className="overflow-hidden">
              <div
                className="flex items-centers overflow-x-scroll gap-7 scrollbar-none px-20" data-aos="fade-left"
              >
                {generalContext?.products?.slice(0, 10)?.map((item, idx) => (
                  <ProductBox
                    key={idx}
                    desc={item?.name}
                    price={item?.price}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center">
              <Link
                href={"/products"}
                className=" btn-theme"
              >
                <button className="cursor-pointer">
                  View All Products
                </button>
              </Link>
            </div>
          </div>
        </section>
      </AOSWrapper>


      {/* <<=== MAIN = Contact Us */}
      <AOSWrapper>
        <section className="layout-container py-20">
          <div className="space-y-10">
            <Heading
              desc={"Contact Us"}
              className={"text-center"}
            />
            <div className="flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="md:w-[45%] flex items-center justify-center">
                <Image
                  src={"/assets/hero6.jpg"}
                  width={450}
                  height={500}
                  alt="WelcomgImg"
                  className="rounded-3xl"
                />
              </div>
              <div className="flex-1">
                <p>
                  We&apos;d love to hear from you! Whether you&apos;re interested in our range of products, have questions about our services, or simply want to learn more about our company, our team is here to help. Please feel free to reach out to us via phone, email, or our contact form. We are committed to providing prompt and helpful responses and look forward to connecting with you soon.
                </p>
                <div className="py-5 flex items-center justify-end">
                  <Link
                    href={"/contact"}
                    className=" btn-theme"
                  >
                    <button className="cursor-pointer">
                      Contact Us
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </AOSWrapper>


      {/* <<=== MAIN = Highlights */}
      <section className="py-20 bg-primary-bgColor/90">
        <div className="space-y-10 layout-container text-theme-text">
          <Heading
            desc={"Highlights"}
            className={"text-center"}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { count: "17", suffix: "+", label: "Years Of Business" },
              { count: "100", suffix: "+", label: "Products In Range", duration: 6 },
              { count: "70", suffix: "+", label: "Clients", duration: 4 },
              { count: "10", label: "Awards Won" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-10 space-y-3 border"
              >
                <div className="font-semibold text-3xl text-left" id="counter">
                  <CountUp
                    start={0}
                    end={item?.count}
                    delay={0}
                    suffix={item?.suffix}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  >
                    {({ countUpRef }) => (
                      <div>
                        <span ref={countUpRef}>0</span>
                      </div>
                    )}
                  </CountUp>
                </div>
                <div>{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
