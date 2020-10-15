// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onMessage.addListener(function (request) {
    replaceSelectedText(document.activeElement, request.url);
});

function replaceSelectedText(elem, text) {
    var start = elem.selectionStart;
    var end = elem.selectionEnd;
    var replaceStart = '<a href="'+text+'">';
    var currentSelected = elem.value.slice(start, end);
    var replaceEnd = '</a>';
    var total = replaceStart + currentSelected + replaceEnd;

    elem.value = elem.value.slice(0, start) + total + elem.value.substr(end);
    elem.selectionStart = start + total.length;
    elem.selectionEnd = elem.selectionStart;
}