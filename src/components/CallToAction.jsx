import { Button } from "flowbite-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl text-white font-semibold">
          Want to learn more about programming?
        </h2>
        <p className="text-white-500 my-2">
          Checkout these resources with Projects
        </p>
        <Button
          gradientDuoTone="purpleToPink"
          className="rounded-tl-xl rounded-bl-none"
        >
          <a
            href="https://github.com/jayprajapati1904"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white"
          >
            Github Projects
          </a>
        </Button>
      </div>
      <div className="p-7 flex-1">
        <img
          src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg"
          alt="Programming Resources"
        />
      </div>
    </div>
  );
}
