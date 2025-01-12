

function Card({ username = " default", post = "Not assigned yet", imageURL = "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" }) {

    return (
        <div>
            <figure className="md:flex m-2 bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
                <img className="overflow-hidden w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src={imageURL} alt="" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima, dolores.
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {username}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {post}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card