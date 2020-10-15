// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

function getClickHandler(info, tab) {
  let url = prompt('Enter your url', '#');
  chrome.tabs.sendMessage(tab.id, { url: url});
};

chrome.runtime.onInstalled.addListener(function() {
  chrome.contextMenus.create({
    id: 'addurl',
    title: 'Add url',
    type: 'normal',
    contexts: ['selection', 'editable']
  });
});

chrome.contextMenus.onClicked.addListener(getClickHandler);
