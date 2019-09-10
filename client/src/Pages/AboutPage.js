import React from 'react'
import Sophia from "../media/Sophia_D_Dog.JPG"
export default function AboutPage() {
    let image_styles = {
        height: "auto",
        backgroundImage: `url(${Sophia})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right", 
        backgroundSize: "cover",
        width: "60%"
    }
    return (
        <section className="flex h-screen">
        <div style={image_styles} className="w-3/5"></div>
        <div className="p-12 w-2/5 flex flex-col bg-white">
            <h2 className="text-4xl font-semibold body-font">Welcome to Doggo Land!</h2>
            <p className="my-4">
                This site was the product of a 7 part series to help beginning developers learn to make a fullstack application with Javascript!
                Using Node, Express and Knex on the backend and React and TailwindCSS on the frontend, we've created a fun application that followers can share as a valued portfolio piece.
            </p>
            <p className="my-2">
                If this your first time viewing this, follow the links below to find this projects Github, both front and backend, and links to the Medium Articles!
            </p>
            <div className="my-4">
                <h2 className="text-2xl font-bold">
                    Articles:
                </h2>
                <div className="flex w-full flex-wrap">
                    <a className="bg-blue-700 text-white font-semibold hover:bg-blue-900 mx-2 mt-2 py-1 px-3 rounded" href="https://medium.com/matts-lambda-minutes/lets-build-a-fullstack-app-with-javascript-episode-1-f63a4fa4700e?source=---------2------------------">Article 1</a>
                    <a className=" bg-blue-700 text-white font-semibold hover:bg-blue-900 mx-2 mt-2 py-1 px-3 rounded" href="https://medium.com/matts-lambda-minutes/lets-build-a-fullstack-app-with-javascript-episode-2-681d9f602d91">Article 2</a>
                    <a className=" bg-blue-700 text-white font-semibold hover:bg-blue-900 mx-2 mt-2 py-1 px-3 rounded" href="https://medium.com/matts-lambda-minutes/lets-build-a-fullstack-app-with-javascript-episode-3-f4589caeaae7">Article 3</a>
                    <a className=" bg-blue-700 text-white font-semibold hover:bg-blue-900 mx-2 mt-2 py-1 px-3 rounded" href="https://medium.com/@mattbasile/lets-build-a-fullstack-app-with-javascript-episode-4-6018413bf13c">Article 4</a>
                    <a className=" bg-blue-700 text-white font-semibold hover:bg-blue-900 mx-2 mt-2 py-1 px-3 rounded" href="https://medium.com/@mattbasile/lets-build-a-fullstack-app-with-javascript-episode-5-part-1-5242d9fd157f">Article 5.1</a>
                    <a className=" bg-blue-700 text-white font-semibold hover:bg-blue-900 mx-2 mt-2 py-1 px-3 rounded" href="https://medium.com/matts-lambda-minutes/lets-build-a-fullstack-app-with-javascript-episode-5-part-2-4f10dedf4550">Article 5.2</a>
                    <a className=" bg-blue-700 text-white font-semibold hover:bg-blue-900 mx-2 mt-2 py-1 px-3 rounded" href="https://medium.com/matts-lambda-minutes/lets-build-a-fullstack-app-with-javascript-episode-6-bf00604d12ff">Article 6</a>
                    <a className=" bg-blue-700 text-white font-semibold hover:bg-blue-900 mx-2 mt-2 py-1 px-3 rounded" href="">Article 7</a>
                </div>
            </div>
            <div>
                <h2 className="text-2xl font-bold">
                    Github:
                </h2>
                <div className="flex w-full flex-wrap">
                    <a href="https://github.com/mattbasile/Doggo_Land_FE_Tutorial" className=" bg-blue-700 text-white font-semibold hover:bg-blue-900 mx-2 mt-2 py-1 px-3 rounded">Frontend</a>
                    <a href="https://github.com/mattbasile/Doggo_Land" className=" bg-blue-700 text-white font-semibold hover:bg-blue-900 mx-2 mt-2 py-1 px-3 rounded">Backend</a>
                </div>
            </div>
            <p className="text-md font-light text-center my-8">Also, that's my dog Sophia to the left, she's an good doggo and supports this content!</p>
        </div> 
    </section>
    )
}
