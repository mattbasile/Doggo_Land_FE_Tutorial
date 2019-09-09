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
            <h2 className="text-4xl text-semibold body-font">Welcome to Doggo Land!</h2>
            <p>
                This site was create as part of a 7 article series to help beginners learn to make a fullstack application with Javascript!
                Using Node, Express and Knex on the backend and React and TailwindCSS on the frontend, we've created a fun application that followers can share a valued portfolio piece.
            </p>
            <p>
                If this your first time viewing this, to follow the links below to find this projects Github, both front and backend, and Links to the medium Articles!
            </p>
            <div className="flex justify-center items-center">
                <h2>
                    Articles:
                </h2>
                <a className="px-3 py-3 bg-blue-700 text-white mx-2 rounded-full" href="https://medium.com/matts-lambda-minutes/lets-build-a-fullstack-app-with-javascript-episode-1-f63a4fa4700e?source=---------2------------------">1.0</a>
                <a className="px-3 py-3 bg-blue-700 text-white mx-2 rounded-full" href="https://medium.com/matts-lambda-minutes/lets-build-a-fullstack-app-with-javascript-episode-2-681d9f602d91">2.0</a>
                <a className="px-3 py-3 bg-blue-700 text-white mx-2 rounded-full" href="https://medium.com/matts-lambda-minutes/lets-build-a-fullstack-app-with-javascript-episode-3-f4589caeaae7">3.0</a>
                <a className="px-3 py-3 bg-blue-700 text-white mx-2 rounded-full" href="https://medium.com/@mattbasile/lets-build-a-fullstack-app-with-javascript-episode-4-6018413bf13c">4.0</a>
                <a className="px-3 py-3 bg-blue-700 text-white mx-2 rounded-full" href="https://medium.com/@mattbasile/lets-build-a-fullstack-app-with-javascript-episode-5-part-1-5242d9fd157f">5.0</a>
                <a className="px-3 py-3 bg-blue-700 text-white mx-2 rounded-full" href="https://medium.com/matts-lambda-minutes/lets-build-a-fullstack-app-with-javascript-episode-5-part-2-4f10dedf4550">5.2</a>
                <a className="px-3 py-3 bg-blue-700 text-white mx-2 rounded-full" href="https://medium.com/matts-lambda-minutes/lets-build-a-fullstack-app-with-javascript-episode-6-bf00604d12ff">6.0</a>
                <a className="px-3 py-3 bg-blue-700 text-white mx-2 rounded-full" href="">7.0</a>
            </div>
            <div>
                <h2>
                    Github:
                </h2>
                <a href=""></a>
                <a href=""></a>
            </div>
            
        </div> 
    </section>
    )
}
