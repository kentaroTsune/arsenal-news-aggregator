const Header = () => {
  return (
    <header>
      <div className="headerLogo">
        <h1>Arsenal News Aggregator</h1>
        <figure>
          <img src="/public/vite.svg" alt="" width="32" height="32" loading='eager' />
        </figure>
      </div>
      <div className="serach">
        <input type="text" placeholder='記事を検索' />
      </div>
      <div className="account">
        <figure>
          <img src="/public/vite.svg" alt="" width="32" height="32" />
        </figure>
      </div>

      <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" class="bg-blue-600 text-white px-4 py-2 rounded">
  モーダルを開く
</button>

<div id="defaultModal" tabindex="-1" aria-hidden="true" class="hidden fixed inset-0 z-50 overflow-y-auto">
  <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
    <div class="relative bg-white rounded-lg shadow">
      <div class="flex justify-between items-start p-4 border-b rounded-t">
        <h3 class="text-xl font-semibold text-gray-900">
          モーダルタイトル
        </h3>
        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center" data-modal-hide="defaultModal">
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"/>
          </svg>
          <span class="sr-only">閉じる</span>
        </button>
      </div>
      <div class="p-6 space-y-6">
        <p class="text-base leading-relaxed text-gray-500">
          これはFlowbiteのモーダルコンポーネントの例です。
        </p>
      </div>
    </div>
  </div>
</div>

    </header>
  )
}

export default Header