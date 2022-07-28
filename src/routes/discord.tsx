import { HashIcon, DiscordIcon } from "../components/Icons";

export default function Index() {
  return (
    <main className="flex h-full">
      <dialog
        open={true}
        className="absolute top-[140px] right-[248px] w-72 shadow-lg"
      >
        <header className="h-16 rounded-tr-xl rounded-tl-xl bg-slate-800">
          <div className="absolute left-4 top-4 flex h-24 w-24 items-end justify-end rounded-full border-4 border-zinc-900 bg-slate-500">
            <img
              className="rounded-full"
              src="https://cdn.discordapp.com/avatars/180078923114086402/c68798f59e5116214560a40cd05a5e69.webp?size=240"
              alt="Avatar"
            />
            <div className="absolute right-0 bottom-0 h-6 w-6 rounded-full border-4 border-zinc-900 bg-green-600"></div>
          </div>
        </header>
        <div className="h-60 rounded-br-xl rounded-bl-xl bg-zinc-900 px-4 pt-16 text-white">
          <h3 className="text-lg font-semibold">
            jensen<span className="text-gray-400">#1337</span>
          </h3>
        </div>
      </dialog>
      <nav className="h-full overflow-y-scroll bg-shade-darkest px-px pt-3 pb-3">
        <ul className="flex flex-col items-center space-y-2">
          <li className="flex items-center space-x-2">
            <div className="h-10 w-1 rounded-tr-sm rounded-br-sm bg-transparent"></div>
            <div className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-shade-lighter hover:rounded-2xl">
              <DiscordIcon size="lg" />
            </div>
          </li>
          <li className="flex w-full justify-center">
            <div className="ml-3 h-0.5 w-8 bg-shade-lighter"></div>
          </li>
          <li className="flex items-center space-x-2">
            <div className="h-10 w-1 rounded-tr-sm rounded-br-sm bg-transparent"></div>
            <div className="h-12 w-12 cursor-pointer rounded-full bg-shade-lighter hover:rounded-2xl"></div>
          </li>
          <li className="flex items-center space-x-2">
            <div className="h-10 w-1 rounded-tr-sm rounded-br-sm bg-transparent"></div>
            <div className="h-12 w-12 cursor-pointer rounded-full bg-shade-lighter hover:rounded-2xl"></div>
          </li>
          <li className="flex items-center space-x-2">
            <div className="h-10 w-1 rounded-tr-lg rounded-br-lg bg-white"></div>
            <div className="h-12 w-12 cursor-pointer rounded-2xl bg-white"></div>
          </li>
          <li className="flex items-center space-x-2">
            <div className="h-10 w-1 rounded-tr-sm rounded-br-sm bg-transparent"></div>
            <div className="h-12 w-12 cursor-pointer rounded-full bg-shade-lighter hover:rounded-2xl"></div>
          </li>
          <li className="flex items-center space-x-2">
            <div className="h-10 w-1 rounded-tr-sm rounded-br-sm bg-transparent"></div>
            <div className="h-12 w-12 cursor-pointer rounded-full bg-shade-lighter hover:rounded-2xl"></div>
          </li>
          <li className="flex items-center space-x-2">
            <div className="h-10 w-1 rounded-tr-sm rounded-br-sm bg-transparent"></div>
            <div className="h-12 w-12 cursor-pointer rounded-full bg-shade-lighter hover:rounded-2xl"></div>
          </li>
        </ul>
      </nav>
      <aside className="flex h-full w-60 flex-col bg-shade-base">
        <header className="flex h-12 cursor-pointer items-center border-b border-shade-darker py-3 px-4 shadow-md hover:bg-highlight-active">
          <div className="flex h-6 items-center text-sm font-bold text-white">
            Impostor School
          </div>
        </header>
        <div className="flex-1 overflow-y-scroll text-highlight-inactive">
          <ul className="space-y-4 py-6 pl-2">
            <li>
              <h3 className="mb-2 px-2 text-xs font-bold">TEXT CHANNELS</h3>
              <ul>
                <li className="my-px flex cursor-pointer items-center space-x-2 rounded-md py-1 px-2 hover:bg-shade-lighter">
                  <HashIcon size="lg" />
                  <span className="tracking-wide">general</span>
                </li>
                <li className="my-px flex cursor-pointer items-center space-x-2 rounded-md py-1 px-2 hover:bg-shade-lighter">
                  <HashIcon size="lg" />
                  <span className="tracking-wide">announcements</span>
                </li>
                <li className="my-px flex cursor-pointer items-center space-x-2 rounded-md py-1 px-2 hover:bg-shade-lighter">
                  <HashIcon size="lg" />
                  <span className="tracking-wide">jobs-and-contracts</span>
                </li>
              </ul>
            </li>
            <li>
              <h3 className="mb-2 px-2 text-xs font-bold">PAIR PROGRAMMING</h3>
              <ul className="space-y-1">
                <li className="my-px flex cursor-pointer items-center space-x-2 rounded-md py-1 px-2 hover:bg-shade-lighter">
                  <HashIcon size="lg" />
                  <span className="tracking-wide">live-coding-1</span>
                </li>
                <li className="my-px flex cursor-pointer items-center space-x-2 rounded-md bg-highlight-active py-1 px-2">
                  <HashIcon size="lg" />
                  <span className="tracking-wide text-white">
                    live-coding-2
                  </span>
                </li>
                <li className="my-px flex cursor-pointer items-center space-x-2 rounded-md py-1 px-2 hover:bg-shade-lighter">
                  <HashIcon size="lg" />
                  <span className="tracking-wide">live-coding-3</span>
                </li>
                <li className="my-px flex cursor-pointer items-center space-x-2 rounded-md py-1 px-2 hover:bg-shade-lighter">
                  <HashIcon size="lg" />
                  <span className="tracking-wide">co-working</span>
                </li>
                <li className="my-px flex cursor-pointer items-center space-x-2 rounded-md py-1 px-2 hover:bg-shade-lighter">
                  <HashIcon size="lg" />
                  <span className="tracking-wide">leetcode</span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="flex cursor-pointer space-x-2 bg-shade-darker p-2">
          <div className="relative flex h-8 w-8 items-end justify-end rounded-full">
            <img
              className="rounded-full hover:opacity-80"
              src="https://cdn.discordapp.com/avatars/180078923114086402/c68798f59e5116214560a40cd05a5e69.webp?size=240"
              alt="Avatar"
            />
            <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-shade-base bg-green-600"></div>
          </div>
          <div className="flex flex-col">
            <h3 className="text-xs font-semibold text-white">jensen</h3>
            <h4 className="text-xs font-light text-gray-400">#1337</h4>
          </div>
        </div>
      </aside>
      <section className="flex h-full flex-1 flex-col">
        <header className="z-10 flex h-12 flex-shrink-0 items-center space-x-2 border-b border-shade-base bg-shade-lighter pl-2 font-bold text-white shadow-md">
          <span className="mx-1 text-highlight-inactive">
            <HashIcon size="xl" />
          </span>
          <span className="tracking-wider">live-coding-2</span>
        </header>
        <div className="flex min-h-0 flex-auto">
          <div className="flex flex-auto flex-col bg-shade-lighter">
            <section className="flex-1"></section>
            <section className="pl-4 pb-6 pr-2">
              <input
                className="w-full rounded-xl bg-shade-lightest py-2 px-4 text-sm font-light text-white placeholder-highlight-inactive outline-none"
                placeholder="Message #live-coding-2"
              />
            </section>
          </div>
          <div className="w-60 overflow-y-scroll bg-shade-base pl-2 text-highlight-inactive">
            <ul className="space-y-8 py-6">
              <li>
                <h3 className="mb-2 px-2 text-xs font-bold">ONLINE - 3</h3>
                <ul>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">Aarond</span>
                  </li>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md bg-highlight-active p-1 px-2">
                    <div className="relative flex h-8 w-8 items-end justify-end rounded-full">
                      <img
                        className="rounded-full"
                        src="https://cdn.discordapp.com/avatars/180078923114086402/c68798f59e5116214560a40cd05a5e69.webp?size=240"
                        alt="Avatar"
                      />
                      <div className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-2 border-shade-base bg-green-600"></div>
                    </div>
                    <span className="tracking-wide text-white">jensen</span>
                  </li>
                </ul>
              </li>
              <li>
                <h3 className="mb-2 px-2 text-xs font-bold">OFFLINE - 10</h3>
                <ul>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">Brian Chang</span>
                  </li>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-pink-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">Gloria</span>
                  </li>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">Jackson</span>
                  </li>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">Jake</span>
                  </li>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-fuchsia-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">JosiahPilon</span>
                  </li>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">Nauman</span>
                  </li>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-lime-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">Roger (MST)</span>
                  </li>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">Ryan H</span>
                  </li>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">Sherwin</span>
                  </li>
                  <li className="my-1 flex cursor-pointer items-center space-x-3 rounded-md p-1 px-2 hover:bg-shade-lighter">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500">
                      <DiscordIcon />
                    </div>
                    <span className="tracking-wide">tpan</span>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
