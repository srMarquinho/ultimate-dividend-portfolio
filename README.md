# Ultimate Dividend Portfolio Spreadsheet
:moneybag: Ultimately an essential - powerful  - easy to use - dividend portfolio sheet. :moneybag:

## :beginner: Features

1. It's extremely easy to use and easy for the eyes (or at least intended to). Add your transactions and :boom:

1. Get started and setup in under 3 minutes.

1. It's 100% free! No subscriptions, no ads and no sign-ups.

1. View and buy at any currency.

1. Multiple accounts support.

1. **Wish List**
    - Add the ticker and the value you wish to sell or buy and track if your wish came true with detailed information.
    - The row with the stock will go green when to Buy and red when to Sell.

1. **Portfolio - Portfolio Summary - Sectors Summary**
    - All the information you need about all stocks in your portfolio.
    - Weight, Sector, Industry, Type, Currency, Exchange and more, all automatically populated displayed in graphs.
    - Hyperlinked taking you directly the provider for even more information out of the box.

1.  **Transactions - Transactions Summary**
    - This is where the magic lives. Add your transaction and track your actions.
    - Find by date range or stock.

1. **Dividend Income - Dividend Income Summary**
    - Add the dividends you've received and track them in the summary.
    - Find by date range, stock or type.
    - Great for tracking dividend growth.

## :beginner: Getting a copy

1. Make a copy of the spreadsheet.
    If sharing, bookmarking or saving the link. Use [this GitHub page](https://srmarquinho.github.io/ultimate-dividend-portfolio/) as the copy link may likely change overtime.

    :bar_chart: [Here is an example with my own portfolio for reference](https://docs.google.com/spreadsheets/d/1Wjj30H6QfW2K9zde6MlSEVGWgDUl04YHB-e6fE1Ddn4/edit?usp=sharing)

    :bar_chart: [**Here is the blank template you need to make a COPY**](https://docs.google.com/spreadsheets/d/1G43E_Z5TyqDw0cE8oaqOz-NULXbvqoM1KQs0msSuj3o/copy?usp=sharing) - this will create a copy to yourself on Google Drive!!!

1. Install and authorize scripts. That's necessary to give scripts access to your sheets. You will only need to do this once.

> Don't worry. This is open source. Google just wants to ensure you are aware a script will run.

  - In the top menu click "PORTFOLIO" > "About"

<div><img src="./images/PortfolioMenu.png" width="300"></div>
--
<div><img src="./images/Authorisation.png" width="300"></div>
--
<div><img src="./images/Verify.png" width="300"></div>
--
<div><img src="./images/Allow.png" width="300"></div>

- Reload the page. If you see the sidebar you are set. The sidebar is where you can stay up to date with any update.

## :beginner: Instructions

1. Check _"Settings"_ sheet tab and choose your currency.

1. Cells you **should** change and add your own values are light or dark **YELLOW(ish)**.

    :warning: **DO NOT edit any other cell**. Everything else is automatically populated.

    <div><img src="./images/Table.png" width="150"></div>

1. You are ready. Start adding _"Transactions"_ to see the magic happen.
    - Ensure `-` are actually `0`.
    - You can add one transaction per stock with the average value paid if that's preferable by you.

- **UPDATE NOTES:**
  - Copy and paste all yellowish cells and paste in the new sheet. (right click `Paste special` > `Paste values only`)
  - Ensure `-` are actually `0`.
  - **from 1.0.x**
      - There's an extra column "account" in the _"Dividend Income"_ tab.
  - Check the [CHANGELOG](https://github.com/srMarquinho/ultimate-dividend-portfolio/blob/master/CHANGELOG.md) to see what's new.

### Tooltips :bulb:

- Check for **tooltips** by hovering over the first row cells.
- I encourage you to chase tooltips, most will be self explanatory. :wink:

### Overrides tab - (Missing stock data in the "Portfolio")

- This is optional.
- At times "the provider" may not have the information for the ticker you entered. Showing N/A.
- Again, **DO NOT edit any grey cell** in the "Portfolio", if you do it may brake the auto-populate.
- Instead use the tab _"Overrides"_ to enter the missing information you need.

### Sorting

- Sorting is one of the best features and it has being kept in mind during development.
- Order doesn't matter, all entries can be added in any order. A striped triangle in the first row can be used for re-ordering. For instance, you can order the "Portfolio" by name. My preferred way is by weight (Sort Z - A).
- In the _"Portfolio"_ section you can also drag and drop columns and rows to re-order (just don't delete them). How cool is that?
- Why not trying to sort by "Sectors", "Return %" or "Ex-dividend day"? :wink:
- **NOTE:** When switching between accounts in the "Portfolio" tab you might need to sort again to remove blank rows.

### Currency

- Once your "home" currency is chosen in the _"Settings"_, it should not be changed as it will be used for exchange based on the value added in _"Transactions"_.
- Tip: In _"Transactions"_ your "home" currency exchange value will always be `1`.

### Tips

**Account view:** If working with multiple accounts, double click cell `A1` in the _"Portfolio"_ tab to select between them.

**Find:** You can use `ctrl f` (`cmd f` on mac) to find for keywords in your sheet.

**Too big or too small:** Use `ctrl -` (`cmd -` on mac) to zoom out or `ctrl +` (`cmd +` on mac) to zoom in.

**Hundreds of transactions to add:** You'll probably be alright adding the average price you paid for each stock in the `Transactions` tab. Unless you want a detailed summary, here is how:
  - Sum all the prices you've paid for a stock and divide it by the number of transactions to get your average cost.
  - Use exchange `1` and add your average cost to that stock at `Buy/Sell Price` in your own currency.
  - From there you can carry on adding transactions individually.
  - This is how my `VUSA.L` and my `JNJ` would look like i.e.:
  <div>
    <img alt="Average Transactions Example" src="./images/AverageTransactionsExample.png" width="100%">
  </div>

## :beginner: Known issues

Please, please, please. Do not email me reporting these errors.

### "#ERROR!" or "Loading..."

Use the menu at the top:
  - `PORTFOLIO` > `Refresh portfolio calculations` to refresh the cells.
  or try:
  - `PORTFOLIO` > `Refresh data` to retrieve fresh stock data.

They are Google errors and seem to be related to cache. Google caches each cell and sometimes they get stuck. :neutral_face:

### Ticker with double digits exchange displayed as link

Stocks with double digits in its ticker symbol (i.e. from Germany with `.DE`). Disable by right-clicking and choosing unlink. If you know a setting to disable that by default, please let me know.

### New issues and features

You are welcome to open issues and features here on GitHub.

:children_crossing: Just keep in mind I'm a busy dad full time worker and it may take some time for your wish to come true.

------------------

:white_check_mark: **If you follow the rules you should have a smooth experience.**

------------------

And if you found this helpful and appreciate the time put on this sheet, send your love by donating any amount to the kids piggy bank. *Any* amount won't be unnoticed. If you like to give me some reference, I can then thank you personally.

By doing this you will be contributing to future updates and features. **THANK YOU!** :kissing_smiling_eyes:

<div>
<a href="https://paypal.me/srmarquinho">
  <img alt="https://paypal.me/srmarquinho" src="./images/Paypal.png" width="125">
</a>
<a href="https://paypal.me/srmarquinho">https://paypal.me/srmarquinho</a>
</div>

------------------

<a href="www.trading212.com/invite/FMJUCzLD">
  <img alt="trading212.com/invite/FMJUCzLD" src="./images/T212.jpg" width="100">
</a>

**Do you want to get a free stock share worth up to £100?**

Create a Trading 212 Invest account using this link [www.trading212.com/invite/FMJUCzLD](www.trading212.com/invite/FMJUCzLD) and we both get a free share! It's also commission free.

------------------

<a href="https://www.coinbase.com/join/araujo_4md">
  <img alt="https://www.coinbase.com/join/araujo_4md" src="./images/Coinbase.jpg" width="100">
</a>

Coinbase is the world's most trusted place to buy and sell cryptocurrency. Open an account with this link [https://www.coinbase.com/join/araujo_4md](https://www.coinbase.com/join/araujo_4md), and if you buy or sell £79 or more of crypto, you'll receive £7 worth of free Bitcoin!

------------------

:link: [https://www.linkedin.com/in/srmarquinho/](https://www.linkedin.com/in/srmarquinho/)
