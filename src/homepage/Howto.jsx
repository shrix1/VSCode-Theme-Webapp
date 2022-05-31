export default function Howto() {
  return (
    <>
      <main
        className="flex flex-col justify-between items-center font-pop capitalize
       bg-gradient-to-b from-mainpp-200 to-mainbl-200"
      >
        <h1 className="text-3xl text-white font-light">
          how to <span className="text-mainbl-300 ">download</span> :
        </h1>
        <div>
          <h1>From VSCODE code editor :</h1>
          <span>
            go to the extension panel and serach for black panther theme
          </span>
          <span>(or)</span>
          <h1>Manual download :</h1>
          <span>
            follow the
            <a href="/" className="text-mainpp-200 underline">
              link
            </a>
            to download the awesome theme
          </span>
        </div>
      </main>
    </>
  );
}
