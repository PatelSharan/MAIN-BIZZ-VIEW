import AOSWrapper from "@/components/common/AOSWrapper";
import Heading from "@/components/layouts/Heading";
import ProductBox from "@/components/layouts/ProductBox";
import Image from "next/image";
import Link from "next/link";

export default function Home() {

  return (
    <>
      {/* 🌟 Hero Section */}
      <section className="relative w-full h-screen">
        <Image
          src="/assets/hero1.jpg"
          alt="Hero"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center space-y-2 overflow-hidden">
          <h1 className="text-white/90 text-3xl md:text-5xl text-center font-extrabold font-libreBaskerville"
            data-aos="fade-right"
          >
            Good Product, Good Life
          </h1>
          <h1
            className="text-white/90 text-sm md:text-base text-center font-poppins"
            data-aos="fade-left"
          >
            Your trusted partner in global trade. We deliver premium products across borders with efficiency and reliability.
          </h1>
        </div>
      </section>


      {/* <<=== MAIN =  Welcome Section */}
      <AOSWrapper>
        <section className="layout-container py-20">
          <div className="space-y-10">
            <Heading
              desc={"Welcome To BizzView"}
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
                <ProductBox
                  className={"bg-light-1 text-5xl"}
                  desc={"Cumin Seeds\n ( Jeera )"}
                />
                <ProductBox
                  desc={"Fennel Seeds\n ( Variyali )"}
                />
                <ProductBox
                  desc={"Black Sesame Seeds\n ( Kala Til )"}
                />
                <ProductBox
                  desc={"White Sesame Seeds\n ( Safed Til ) "}
                />
                <ProductBox
                  desc={"Coriander Seeds\n ( Dhana )"}
                />
                <ProductBox
                  desc={" psyllium husk\n ( Isabgol )"}
                />
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
    </>
  );
}
