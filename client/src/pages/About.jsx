export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Earthly Expedition Logs
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              I consider myself a traveler on this planet, and this is where I
              record every little experience I have had here. Feel free to
              browse around and leave comments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
