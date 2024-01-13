import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div className={`flex items-center justify-between`}>
          <h1 className={`font-extrabold text-7xl ml-4`}>Hello World</h1>
          <div className={`flex flex-col justify-center min-h-screen mr-4`}>
              <p>Hi</p>
              <p>Welcome</p>
              <p>This is my new app</p>
          </div>
          <div className={`flex items-center justify-center flex-col`}>
              <p className={`font-bold text-sm`}>
                  This is my todolist application
              </p>
              <p className={`font-bold text-sm`}>
                  It will be known as todothings.
              </p>
              <p className={`font-bold text-sm`}>
                  Derived from todoist and things 3
              </p>
              <p className={`font-bold text-sm`}>
                  Simple crud based application built using MongoDB
              </p>
          </div>
      </div>
    </main>
  )
}
