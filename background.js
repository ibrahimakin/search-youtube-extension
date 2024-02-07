chrome.contextMenus.onClicked.addListener((info, tab) => {
    const url = new URL('https://www.youtube.com/results');
    url.searchParams.set('search_query', info.selectionText);
    chrome.tabs.create({ url: url.href, index: tab.index + 1 });
});

chrome.runtime.onInstalled.addListener(() =>
    chrome.contextMenus.create({
        title: 'Search Youtube for “%s”',
        contexts: ['selection'],
        id: 'selection'
    })
);