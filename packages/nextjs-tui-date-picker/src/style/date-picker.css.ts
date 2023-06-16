import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  position: relative;
  & > input {
    background: none;
    text-align: center;
    font-size: 15px;
    color: rgb(100, 100, 100);
    border: 
    outline: 0;
    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px white inset !important;
    }
  }
  @media (max-width: 339px) {
    width: 100%;
    flex-direction: column;
  }

  .tui-calendar {
    position: relative;
    background-color: #fff;
    border: 1px solid #aaa;
    z-index: 10;
  }

  .tui-calendar * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .tui-calendar div {
    text-align: center;
  }

  .tui-calendar caption {
    padding: 0;
  }

  .tui-calendar caption span {
    overflow: hidden;
    position: absolute;
    clip: rect(0 0 0 0);
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
  }

  .tui-calendar button,
  .tui-datepicker-dropdown button,
  .tui-datepicker-selector button {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }

  .tui-ico-date,
  .tui-ico-time,
  .tui-datepicker-dropdown .tui-ico-check,
  .tui-ico-caret {
    overflow: hidden;
    display: inline-block;
    width: 1px;
    height: 1px;
    line-height: 300px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA+CAYAAAC7rUKSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpERjdGMzkzODVEQkRFNjExQkVCMjlDOUFDNzZDM0E5NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1ODVCRTc4NkM2QkQxMUU2OTgzMzhGQjZFMjcyMTQ1RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ODVCRTc4NUM2QkQxMUU2OTgzMzhGQjZFMjcyMTQ1RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFERENDMTc0QjlDNkU2MTE5OTc0QjIwOTY3QkQzNjZBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRGN0YzOTM4NURCREU2MTFCRUIyOUM5QUM3NkMzQTk0Ii8+IDwvcmRmOkRlc2NyaXB0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)
      no-repeat;
  }

  .tui-ico-date {
    width: 12px;
    height: 12px;
    background-position: -17px 0;
  }

  .tui-ico-time {
    width: 12px;
    height: 12px;
    background-position: 0 -30px;
  }

  .tui-ico-caret {
    width: 7px;
    height: 4px;
    background-position: 0 -58px;
  }

  .tui-calendar-month,
  .tui-calendar-year {
    width: 202px;
  }
  .tui-calendar {
    z-index: 10;
  }
  .tui-calendar-month .tui-calendar-body,
  .tui-calendar-year .tui-calendar-body {
    width: 202px;
    margin: 0 auto;
  }

  .tui-calendar .tui-calendar-header {
    position: relative;
    border-bottom: 1px solid #efefef;
  }

  .tui-calendar .tui-calendar-header-inner {
    padding: 17px 50px 15px;
    height: 50px;
  }

  .tui-calendar .tui-calendar-title-today {
    height: 30px;
    margin: 0;
    font-size: 12px;
    line-height: 34px;
    color: #777;
    background-color: #f4f4f4;
  }

  .tui-calendar .tui-calendar-title-today:hover {
    color: #333;
    background-color: #edf4fc;
    cursor: pointer;
  }

  .tui-calendar .tui-calendar-title {
    display: inline-block;
    font-size: 18px;
    font-weight: normal;
    font-style: normal;
    line-height: 1;
    color: #333;
    cursor: default;
    vertical-align: top;
  }

  .tui-calendar-btn {
    overflow: hidden;
    position: absolute;
    top: 0;
    width: 32px;
    height: 50px;
    line-height: 400px;
    z-index: 10;
    cursor: pointer;
    border: none;
    background-color: #fff;
  }

  .tui-calendar .tui-calendar-btn-prev-month {
    left: 0;
  }

  .tui-calendar .tui-calendar-btn-next-month {
    right: 0;
  }

  .tui-calendar .tui-calendar-btn-prev-year {
    left: 0;
  }

  .tui-calendar .tui-calendar-btn-next-year {
    right: 0;
  }

  .tui-calendar .tui-calendar-btn-prev-month:after,
  .tui-calendar .tui-calendar-btn-next-month:after,
  .tui-calendar .tui-calendar-btn-prev-year:after,
  .tui-calendar .tui-calendar-btn-next-year:after {
    overflow: hidden;
    position: absolute;
    top: 50%;
    margin-top: -5px;
    line-height: 400px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA+CAYAAAC7rUKSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpERjdGMzkzODVEQkRFNjExQkVCMjlDOUFDNzZDM0E5NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1ODVCRTc4NkM2QkQxMUU2OTgzMzhGQjZFMjcyMTQ1RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ODVCRTc4NUM2QkQxMUU2OTgzMzhGQjZFMjcyMTQ1RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFERENDMTc0QjlDNkU2MTE5OTc0QjIwOTY3QkQzNjZBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRGN0YzOTM4NURCREU2MTFCRUIyOUM5QUM3NkMzQTk0Ii8+IDwvcmRmOkRlc2NyaXB0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)
      no-repeat;
    content: '';
  }

  .tui-calendar .tui-calendar-btn-prev-month:after,
  .tui-calendar.tui-calendar-month .tui-calendar-btn-prev-year:after {
    width: 6px;
    height: 11px;
    left: 50%;
    margin-left: -3px;
    background-position: 0 0;
  }

  .tui-calendar .tui-calendar-btn-next-month:after,
  .tui-calendar.tui-calendar-month .tui-calendar-btn-next-year:after {
    width: 6px;
    height: 11px;
    right: 50%;
    margin-right: -3px;
    background-position: -8px 0;
  }

  .tui-calendar .tui-calendar-btn-prev-year:after {
    width: 11px;
    height: 10px;
    left: 50%;
    margin-left: -6px;
    background-position: -16px -36px;
  }

  .tui-calendar .tui-calendar-btn-next-year:after {
    width: 11px;
    height: 10px;
    right: 50%;
    margin-right: -6px;
    background-position: -16px -49px;
  }

  .tui-calendar.tui-calendar-month .tui-calendar-btn-prev-year,
  .tui-calendar.tui-calendar-month .tui-calendar-btn-next-year {
    width: 50px;
  }

  .tui-calendar .tui-calendar-has-btns .tui-calendar-btn-prev-year {
    left: 10px;
  }

  .tui-calendar .tui-calendar-has-btns .tui-calendar-btn-next-year {
    right: 10px;
  }

  .tui-calendar .tui-calendar-has-btns .tui-calendar-btn-prev-month {
    left: 44px;
  }

  .tui-calendar .tui-calendar-has-btns .tui-calendar-btn-next-month {
    right: 44px;
  }

  .tui-calendar .tui-calendar-body-header th {
    color: #777;
  }

  .tui-calendar .tui-calendar-body-inner {
    width: 100%;
    margin: 0 auto;
    table-layout: fixed;
    border-collapse: collapse;
    text-align: center;
    font-size: 12px;
  }

  .tui-calendar th {
    font-weight: normal;
    cursor: default;
  }

  .tui-calendar th,
  .tui-calendar td {
    height: 39px;
    text-align: center;
    color: #999;
  }

  .tui-calendar .tui-is-blocked:hover {
    cursor: default;
  }

  .tui-calendar .tui-calendar-month {
    width: 25%;
    height: 50px;
  }

  .tui-calendar .tui-calendar-today {
    color: #4b96e6;
  }

  .tui-calendar .tui-calendar-prev-month,
  .tui-calendar .tui-calendar-next-month {
    color: #ccc;
  }

  .tui-calendar .tui-calendar-prev-month.tui-calendar-date,
  .tui-calendar .tui-calendar-next-month.tui-calendar-date {
    visibility: hidden;
  }

  .tui-calendar .tui-calendar-btn-choice {
    background-color: #4b96e6;
  }

  .tui-calendar .tui-calendar-btn-close {
    background-color: #777;
  }

  .tui-calendar .tui-calendar-year {
    width: 25%;
    height: 50px;
  }

  .tui-calendar.tui-calendar-year .tui-calendar-btn-prev-year:after {
    width: 6px;
    height: 11px;
    left: 50%;
    margin-left: -3px;
    background-position: 0 0;
  }

  .tui-calendar.tui-calendar-year .tui-calendar-btn-next-year:after {
    width: 6px;
    height: 11px;
    right: 50%;
    margin-right: -3px;
    background-position: -8px 0;
  }

  .tui-calendar.tui-calendar-year .tui-calendar-btn-prev-year,
  .tui-calendar.tui-calendar-year .tui-calendar-btn-next-year {
    width: 50px;
  }

  .tui-datepicker {
    border: 1px solid #aaa;
    background-color: white;
    position: absolute;
    z-index: 2;
  }

  .tui-datepicker * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .tui-datepicker-type-date {
    width: 274px;
  }

  .tui-datepicker-body .tui-calendar-month,
  .tui-datepicker-body .tui-calendar-year {
    width: auto;
  }

  .tui-datepicker .tui-calendar {
    border: 0;
  }

  .tui-datepicker .tui-calendar-title {
    cursor: pointer;
  }

  .tui-datepicker .tui-calendar-title.tui-calendar-title-year-to-year {
    cursor: auto;
  }

  .tui-datepicker-body .tui-timepicker,
  .tui-datepicker-footer .tui-timepicker {
    width: 274px;
    position: static;
    padding: 20px 46px 20px 47px;
    border: 0;
  }

  .tui-datepicker-footer .tui-timepicker {
    border-top: 1px solid #eee;
  }

  .tui-datepicker-selector {
    padding: 10px;
    font-size: 0;
    text-align: center;
    border-bottom: 1px solid #eee;
  }

  .tui-datepicker-selector-button {
    width: 50%;
    height: 26px;
    font-size: 12px;
    line-height: 23px;
    border: 1px solid #ddd;
    background-color: #fff;
    color: #777;
    outline: none;
    cursor: pointer;
  }

  .tui-datepicker-selector-button.tui-is-checked {
    background-color: #eee;
    color: #333;
  }

  .tui-datepicker-selector-button + .tui-datepicker-selector-button {
    margin-left: -1px;
  }

  .tui-datepicker-selector-button [class^='tui-ico-'] {
    margin: 5px 9px 0 0;
    vertical-align: top;
  }

  .tui-datepicker-selector-button.tui-is-checked .tui-ico-date,
  .tui-datepicker-input.tui-has-focus .tui-ico-date {
    background-position: -17px -14px;
  }

  .tui-datepicker-selector-button.tui-is-checked .tui-ico-time {
    background-position: 0 -44px;
  }

  .tui-datepicker-area {
    position: relative;
  }

  .tui-datepicker-input {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 28px;
    vertical-align: top;
    border: 1px solid #ddd;
  }

  .tui-datepicker-input * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .tui-datepicker-input > input {
    width: 100%;
    height: 100%;
    padding: 6px 27px 6px 10px;
    font-size: 12px;
    line-height: 14px;
    vertical-align: top;
    border: 0;
    color: #333;
  }

  .tui-datepicker-input > .tui-ico-date {
    position: absolute;
    top: 50%;
    right: 8px;
    margin: -6px 0 0 0;
  }

  .tui-datepicker-input.tui-has-focus {
    border-color: #aaa;
  }

  .tui-datetime-input {
    width: 170px;
  }

  .tui-datepicker .tui-is-blocked {
    cursor: default;
    color: #ddd;
  }

  .tui-datepicker .tui-is-valid {
    color: #999;
  }

  .tui-datepicker .tui-is-selectable:hover {
    background-color: #edf4fc;
    cursor: pointer;
  }

  .tui-datepicker .tui-is-selectable.tui-is-selected,
  .tui-datepicker.tui-rangepicker .tui-is-selectable.tui-is-selected {
    background-color: #4b96e6;
    color: #fff;
  }

  .tui-datepicker.tui-rangepicker .tui-is-selected-range {
    background-color: #edf4fc;
  }

  .tui-datepicker-dropdown {
    display: inline-block;
    width: 120px;
  }

  .tui-datepicker-dropdown .tui-dropdown-button {
    width: 100%;
    height: 28px;
    padding: 0 10px;
    font-size: 12px;
    line-height: 20px;
    border: 1px solid #ddd;
    padding: 0 30px 0 10px;
    text-align: left;
    background: #fff;
    cursor: pointer;
  }

  .tui-datepicker-dropdown {
    position: relative;
  }

  .tui-datepicker-dropdown .tui-ico-caret {
    position: absolute;
    top: 12px;
    right: 10px;
  }

  .tui-datepicker-dropdown .tui-dropdown-menu {
    display: none;
    position: absolute;
    top: 27px;
    left: 0;
    right: 0;
    width: 100%;
    padding: 5px 0;
    margin: 0;
    overflow-y: auto;
    min-width: 0;
    max-height: 198px;
    font-size: 12px;
    border: 1px solid #ddd;
    border-top-color: #fff;
    z-index: 10;
    box-sizing: border-box;
    box-shadow: none;
    border-radius: 0;
  }

  .tui-datepicker-dropdown.tui-is-open .tui-dropdown-button {
    display: block;
  }

  .tui-datepicker-dropdown.tui-is-open .tui-dropdown-menu,
  .tui-datepicker-dropdown.tui-is-open .tui-dropdown-button {
    display: block;
    border-color: #aaa;
  }

  .tui-datepicker-dropdown.tui-is-open .tui-ico-caret {
    background-position: -21px -28px;
  }

  .tui-datepicker-dropdown .tui-menu-item {
    position: relative;
    overflow: hidden;
    position: relative;
    height: 28px;
    line-height: 28px;
    background-color: #fff;
    z-index: 10;
  }

  .tui-datepicker-dropdown .tui-menu-item-btn {
    position: relative;
    width: 100%;
    font-size: 12px;
    font-weight: normal;
    line-height: 28px;
    padding: 0 10px 0 30px;
    text-align: left;
    color: #333;
    background-color: #fff;
    border: 0;
    cursor: pointer;
    z-index: 9;
  }

  .tui-datepicker-dropdown .tui-menu-item-btn:hover,
  .tui-menu-item-btn:focus,
  .tui-menu-item-btn:active {
    color: #333;
    background-color: #f4f4f4;
  }

  .tui-datepicker-dropdown .tui-menu-item .tui-ico-check {
    display: none;
    overflow: hidden;
    position: absolute;
    width: 10px;
    height: 8px;
    top: 10px;
    left: 10px;
    background-position: -31px -54px;
    z-index: 10;
    content: 'aaa';
  }

  .tui-datepicker-dropdown .tui-menu-item.tui-is-selected .tui-ico-check {
    display: block;
  }

  .tui-datepicker-dropdown .tui-menu-item.tui-is-selected .tui-menu-item-btn {
    font-weight: bold;
  }

  .tui-dropdown-area {
    font-size: 0;
  }

  .tui-dropdown-area .tui-datepicker-dropdown + .tui-datepicker-dropdown {
    margin-left: 5px;
  }

  .tui-hidden {
    display: none;
  }

  .tui-timepicker * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  .tui-timepicker button {
    border-radius: 0;
  }

  .tui-timepicker input,
  .tui-timepicker select {
    font-weight: normal;
  }

  .tui-ico-t-btn,
  .tui-timepicker-input-radio,
  .tui-ico-colon,
  .tui-ico-time {
    overflow: hidden;
    display: inline-block;
    width: 1px;
    height: 1px;
    line-height: 300px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAA+CAYAAAC7rUKSAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpERjdGMzkzODVEQkRFNjExQkVCMjlDOUFDNzZDM0E5NCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDo1ODVCRTc4NkM2QkQxMUU2OTgzMzhGQjZFMjcyMTQ1RSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo1ODVCRTc4NUM2QkQxMUU2OTgzMzhGQjZFMjcyMTQ1RSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFERENDMTc0QjlDNkU2MTE5OTc0QjIwOTY3QkQzNjZBIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOkRGN0YzOTM4NURCREU2MTFCRUIyOUM5QUM3NkMzQTk0Ii8+IDwvcmRmOkRlc2NyaXB0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)
      no-repeat;
  }

  .tui-timepicker .tui-timepicker-select {
    -webkit-appearance: none;
    -moz-appearance: none;
    -o-appearance: none;
    appearance: none;
    border-radius: 0;
  }

  .tui-timepicker .tui-timepicker-select::-ms-expand {
    display: none;
  }

  .tui-calendar-select-content .tui-timepicker {
    border: 0;
    margin: 0 auto;
  }

  .tui-timepicker input {
    font-size: 16px;
    text-align: center;
    font-weight: normal;
  }

  .tui-timepicker {
    position: relative;
    top: -1px;
    padding: 30px 20px;
    font-weight: bold;
    border: 1px solid #aaa;
    background: white;
    text-align: center;
  }

  .tui-timepicker-row {
    width: 100%;
    font-size: 0;
  }

  .tui-timepicker-column {
    display: inline-block;
    vertical-align: middle;
  }

  .tui-timepicker-btn-area {
    position: relative;
    height: 88px;
    padding: 19px 0;
  }

  .tui-timepicker-spinbox {
    width: 52px;
  }

  .tui-timepicker-selectbox + .tui-timepicker-selectbox {
    padding-left: 5px;
  }

  .tui-timepicker-btn-area .tui-timepicker-spinbox-input {
    width: 100%;
    height: 100%;
    line-height: 46px;
    border: 1px solid #ddd;
  }

  .tui-timepicker-btn {
    position: absolute;
    left: 0;
    width: 100%;
    height: 20px;
    background-color: transparent;
    border: 1px solid #ddd;
    cursor: pointer;
  }

  .tui-timepicker-btn:hover,
  .tui-timepicker-btn:focus,
  .tui-timepicker-btn:active {
    background-color: #f4f4f4;
  }

  .tui-timepicker-btn-up {
    top: 0;
  }

  .tui-timepicker-btn-down {
    bottom: 0;
  }

  .tui-timepicker-btn .tui-ico-t-btn {
    width: 13px;
    height: 7px;
  }

  .tui-timepicker-btn-up .tui-ico-t-btn {
    background-position: 0 -12px;
  }

  .tui-timepicker-btn-down .tui-ico-t-btn {
    background-position: 0 -21px;
  }

  .tui-timepicker-colon {
    width: 22px;
  }

  .tui-timepicker-body .tui-timepicker-colon,
  .tui-timepicker-footer .tui-timepicker-colon {
    width: 18px;
  }

  .tui-ico-colon {
    width: 2px;
    height: 7px;
    background-position: -17px -28px;
  }

  .tui-timepicker-select {
    width: 52px;
    height: 28px;
    padding: 5px 0 5px 9px;
    font-size: 12px;
    border: 1px solid #ddd;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAECAYAAACHtL/sAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6Mzk1NDA2RTVCREIxMTFFNjhENTJFMjdDNDQ3RDJCMTEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6Mzk1NDA2RTZCREIxMTFFNjhENTJFMjdDNDQ3RDJCMTEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozOTU0MDZFM0JEQjExMUU2OEQ1MkUyN0M0NDdEMkIxMSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozOTU0MDZFNEJEQjExMUU2OEQ1MkUyN0M0NDdEMkIxMSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PpZ5HPgAAAAxSURBVHjaYjQ2Nv7PgBswgogzZ87gVMAEU4RLMyHABKUFyNGMbMBHJEOI1gwCAAEGAPSlBRrNcMApAAAAAElFTkSuQmCC)
      no-repeat;
    background-position: 100% 50%;
    cursor: pointer;
  }

  .tui-timepicker-check-lst {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .tui-timepicker-check {
    margin-top: 11px;
  }

  .tui-timepicker-check:first-of-type {
    margin-top: 0;
  }

  .tui-timepicker-checkbox {
    padding-left: 16px;
  }

  .tui-timepicker-radio {
    overflow: hidden;
    position: relative;
    text-align: left;
  }

  .tui-timepicker-radio input {
    position: absolute;
    left: -9999px;
    width: 1px;
    height: 1px;
  }

  .tui-timepicker-radio-label {
    display: inline-block;
    padding-left: 20px;
    font-size: 12px;
    line-height: 16px;
    vertical-align: top;
    color: #777;
    cursor: pointer;
  }

  .tui-timepicker-input-radio {
    position: absolute;
    display: block;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    vertical-align: middle;
    background-position: -31px 0;
  }

  .tui-timepicker-radio
    .tui-timepicker-meridiem-checked
    + .tui-timepicker-radio-label
    .tui-timepicker-input-radio {
    background-position: -31px -18px;
  }

  .tui-timepicker-radio
    input:disabled
    + .tui-timepicker-radio-label
    .tui-timepicker-input-radio {
    background-position: -31px -36px;
  }

  .tui-ico-time {
    width: 12px;
    height: 12px;
    background-position: 0 -30px;
  }

  .tui-timepicker-area {
    position: relative;
  }

  .tui-time-input {
    position: relative;
    display: inline-block;
    width: 120px;
    height: 28px;
    border: 1px solid #ddd;
  }

  .tui-time-input input {
    width: 100%;
    height: 100%;
    padding: 0 27px 0 10px;
    font-size: 12px;
    border: 0;
    color: #333;
    box-sizing: border-box;
  }

  .tui-time-input .tui-ico-time {
    position: absolute;
    top: 50%;
    right: 8px;
    margin: -6px 0 0 0;
  }

  .tui-time-input.tui-has-focus {
    border-color: #aaa;
  }

  .tui-time-input .tui-ico-time {
    background-position: 0 -30px;
  }

  .tui-time-input.tui-has-focus .tui-ico-time {
    background-position: 0 -44px;
  }

  .tui-has-left.tui-timepicker-body,
  .tui-has-left .tui-timepicker-row {
    position: relative;
  }

  .tui-has-left .tui-timepicker-row:after {
    display: block;
    clear: both;
    content: '';
  }

  .tui-has-left .tui-is-add-picker {
    float: left;
    padding: 0 5px 0 0;
  }

  .tui-has-left .tui-timepicker-checkbox {
    float: left;
    margin-top: 23px;
    padding: 0 16px 0 0;
  }

  .tui-hidden {
    display: none;
  }
`;
const Dash = styled.p`
  margin-left: 2px;
  margin-right: 2px;
`;

export { Container, Dash };
