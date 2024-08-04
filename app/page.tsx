import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="relative mx-auto flex flex-col items-center justify-center overflow-clip bg-white px-5 sm:px-10">
      <div className="w-full max-w-7xl">
        <Hero />
      </div>
    </main>
  );
};

export default Home;
