
const Blog = () => {

    return (
        <div >

                {/* Blog 1  */}
            <h1 className="text-3xl text-center mt-8 font-bold hover:text-yellow-600 underline">What is One way data binding?</h1>

            <div className="w-3/4 mx-auto   border-gray-200 rounded-lg mt-14">

                <a href="#">
                    <img className="rounded-t-lg  mx-auto" src="https://i.ibb.co/PM5WY2y/one-way-data-binding.png" alt="" />
                </a>
                <div className="p-5">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">One-way data binding is a concept in web development that refers to the flow of data in a single direction, from the data source to the target presentation element. In other words, changes in the data source automatically update the target, but changes in the target do not affect the data source.

                        For example, in the context of a web application, if you have a variable or model in your code representing some data, you can bind that data to a specific element in the user interface (UI). When the data in the source changes, the UI element is automatically updated to reflect those changes. However, if the user interacts with the UI and modifies the displayed data, the original data source remains unchanged.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>


                {/* Blog 2  */}
            <h1 className="text-3xl text-center mt-10 font-bold hover:text-yellow-600 underline">What is NPM in node.js?</h1>

            <div className="w-3/4 mx-auto   border-gray-200 rounded-lg mt-14">

                <a href="#">
                    <img className="rounded-t-lg  mx-auto" src="https://i.ibb.co/1vPQsFK/Npm.png" alt="" />
                </a>
                <div className="p-5">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">NPM (Node Package Manager) is the default package manager for Node.js, facilitating the management of JavaScript packages and modules. Key aspects include a command-line interface (CLI) for package operations, a `package.json` file for project metadata and dependencies, and a centralized registry for sharing and distributing Node.js packages. NPM simplifies tasks such as package installation, version management, and project initialization. It is integral to the Node.js development ecosystem, enabling developers to easily integrate and share reusable code in their projects.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

                {/* Blog 3  */}
            <h1 className="text-3xl text-center mt-10 font-bold hover:text-yellow-600 underline">Different between Mongodb database vs mySQL database</h1>

            <div className="w-3/4 mx-auto   border-gray-200 rounded-lg mt-14">

                <a href="#">
                    <img className="rounded-t-lg  mx-auto" src="https://i.ibb.co/zPYnVNr/Mongodb-vs-mysql.jpg" alt="" />
                </a>
                <div className="p-5">
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-xl">MySQL is a relational database system that stores data in a structured tabular format. In contrast, MongoDB stores data as JSON documents in a more flexible format. Both offer performance and scalability, but they give better performance for different use cases.</p>
                    <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Read more
                        <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                    </a>
                </div>
            </div>

        </div>
    );
};

export default Blog;