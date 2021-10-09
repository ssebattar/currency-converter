import React from "react";

import img_userguide from "../../usrg.jpg";
import "./FullUserguide.css";

const FullUserguide = () => {
  // Draw Horizontal Line
  const ColoredLine = () => <hr />;

  return (
    <div className="outer">
      <div className="usrg-hd">
        <h2>User Guide</h2>
      </div>
      <div className="text-wrapper-full-guide">
        <b>How To Use</b>
        <br />
        <br />
        1. How do I use the Currency Converter?
        <br />
        Use the Currency Converter to calculate exchange rates for any day. Type
        currency names, 3-letter ISO currency symbols, or country names to
        select your currency. Type values in enter amount box of the converter.
        <br />
        <br />
        1) Enter the amount
        <br />
        2) Select the currency you are converting from
        <br />
        3) Select the currency you are converting to
        <br />
        4) Press the convert button
        <br />
        5) Observe the results. The exchange rate and the converted amount.
        <br />
        <br />
        <div className="img-usrg">
          <img src={img_userguide} width="900" height="250" />
        </div>
        <br />
        <br />
        2. Why can't I find the currency I'm looking for?
        <br />
        For the new Currency Converter, you can type in the name of a country or
        a currency or a three-letter ISO code. We try to keep the list of
        countries and currencies up to date for all currencies where there is
        reliable data available from financial institutions. If you can't find
        the currency you're looking for, please send us feedback.
        <br />
        <br />
        3. Why can't I convert currencies?
        <br />
        If one of the currencies you select is not in effect for the date you
        request (for example, it's obsolete or not yet introduced), you will see
        a message that the exchange rate data is not available. If you are not
        receiving this message, please ensure that you are using a browser that
        supports Javascript. We have tested with Firefox 3.0, Internet Explorer
        6.0+, Safari 3, Google Chrome 3
        <br />
        <br />
        5. How can I convert currencies while I am traveling? You can access app
        rates anywhere using any of our Mobile Currency Converters, available
        for iPhone, Android, or Windows Phone 7 operating systems. You can also
        create your own wallet-sized exchange rate reference card using the
        Traveler's Cheatsheet tool on our Currency Converter.
        <br />
        <ColoredLine />
        <br />
        <b>Software & System Requirements</b>
        <br />
        <br />
        Minimum Requirements
        <br />
        1 CPU | 2GB RAM | 30GB Hard drive
        <br />
        <br />
        Desktop Apps - Operating System and Technical Requirement
        <br />
        Windows - Windows 7, 8.1, and 10
        <br />
        Mac - MacOS 10.12+
        <br />
        Linux - Ubuntu LTS releases 18.04 or later
        <br />
        <br />
        PC Web Browser - Technical Requirement
        <br />
        Chrome v77+ | Firefox v68+ | Safari v12+ | Edge v44+
        <br />
        Mobile Web Browser - Technical Requirement
        <br />
        iOS 11+ with Safari 12+ or Chrome 77+ | Android 7+ with Chrome 77+
        <br />
        <ColoredLine />
        <br />
        <b>Installation</b>
        <br />
        Non etiam tempor id arcu magna ante eget. Nec per posuere cubilia cras
        porttitor condimentum orci suscipit. Leo maecenas in tristique,
        himenaeos elementum placerat. Taciti rutrum nostra, eget cursus velit
        ultricies. Quam molestie tellus himenaeos cubilia congue vivamus
        ultricies. Interdum praesent ut penatibus fames eros ad consectetur sed.
        <br />
        <ColoredLine />
        <br />
        <b>Top Currencies & Trading</b>
        <br />
        Forex is the largest and most liquid market, with trillions of dollars
        traded between millions of parties around the globe each day. One of the
        first steps in understanding the market—which is also known as foreign
        exchange or currency trading—is to gain familiarity with some of the
        more commonly traded currencies. Here is a look at six major currencies,
        as well as the underlying traits and characteristics of each one.
        <br />
        <br />
        1. The U.S. Dollar
        <br />
        <br />
        The U.S. dollar, which is sometimes called the greenback, is first and
        foremost in the world of forex trading, as it is easily the most traded
        currency on the planet. The U.S. dollar can be found in a currency pair
        with all of the other major currencies and often acts as the
        intermediary in triangular currency transactions. This is because the
        greenback acts as the unofficial global reserve currency, held by nearly
        every central bank and institutional investment entity in the world.
        <br />
        <br />
        In addition, due to the U.S. dollar's global acceptance, it is used by
        some countries as an official currency, in lieu of a local currency, a
        practice known as dollarization. The U.S. dollar also may be widely
        accepted in other nations, acting as an informal alternative form of
        payment, while those nations maintain their official local currency.
        <br />
        <br />
        2. The Euro
        <br />
        The euro has become the second most traded currency behind the U.S.
        dollar. The official currency of the majority of the nations within the
        eurozone, the euro was introduced to the world markets on Jan. 1, 1999,
        with banknotes and coinage entering circulation three years later.
        <br />
        <br />
        Along with being the official currency for most eurozone countries, many
        nations within Europe and Africa peg their currencies to the euro, for
        much the same reason that currencies are pegged to the U.S. dollar—to
        stabilize the exchange rate. As a result, the euro is also the world's
        second-largest reserve currency.
        <br />
        <br />
        3. The Japanese Yen
        <br />
        The Japanese yen is easily the most traded of Asian currencies and
        viewed by many as a proxy for the underlying strength of Japan's
        manufacturing and export-driven economy. As Japan's economy goes, so
        goes the yen (in some respects). Forex traders also watch the yen to
        gauge the overall health of the Pan-Pacific region as well, taking
        economies such as South Korea, Singapore, and Thailand into
        consideration, as those currencies are traded far less in the global
        forex markets.
        <br />
        <br />
        The yen is also well known in forex circles for its role in the carry
        trade (seeking to profit from the difference in interest rates between
        two currencies). The strategy involves borrowing the yen at next to no
        cost (due to low-interest rates) and using the borrowed money to invest
        in other higher-yielding currencies around the world, pocketing the rate
        differentials in the process.
        <br />
        <br />
        4. The Great British Pound
        <br />
        The Great British pound, also known as the pound sterling, is the fourth
        most traded currency in the forex market. Although the U.K. was an
        official member of the European Union, the country never adopted the
        euro as its official currency for a variety of reasons, namely historic
        pride in the pound and maintaining control of domestic interest rates.
        As a result, the pound is sometimes viewed as a pure play on the United
        Kingdom.
        <br />
        <br />
        Forex traders will often estimate the value of the British pound based
        on the overall strength of the British economy and political stability
        of its government. Due to its high value relative to its peers, the
        pound is also an important currency benchmark for many nations and
        represents a very liquid component in the forex market. The British
        pound also acts as a large reserve currency due to its historically high
        relative value compared to other global currencies.
        <br />
        <br />
        5. The Canadian Dollar
        <br />
        Also known as the loonie, the Canadian dollar is probably the world's
        foremost commodity currency, meaning that it often moves in step with
        the commodities markets—notably crude oil, precious metals, and
        minerals. With Canada being such a large exporter of such commodities,
        the loonie often reacts to movements in underlying commodities prices,
        especially that of crude oil. Traders often trade the Canadian dollar to
        speculate on the movements of commodities or to hedge positions in the
        commodities market.
        <br />
        <br />
        Being located in close proximity to the world's largest consumer
        base—the United States—the Canadian economy and the Canadian dollar are
        highly correlated to the U.S. economy and movements in the U.S. dollar
        as well.
        <br />
        <br />
        6. The Swiss Franc
        <br />
        Last is the Swiss franc, which, much like Switzerland, is viewed by many
        as a "neutral" currency. More accurately, the Swiss franc is considered
        a safe haven within the forex market, primarily due to the fact that the
        franc tends to move differently than more volatile commodity currencies,
        such as the Canadian and Australian dollars. The Swiss National Bank has
        actually been known to be quite active in the forex market to ensure
        that the franc trades within a relatively tight range, to reduce
        volatility, and to keep interest rates in check.
      </div>
      <div className="footer">
        © CMSC 495 6380 - Current Trends and Projects in Computer Science -
        2218. Fall 2021 Group 6. All rights reserved.
      </div>
    </div>
  );
};

export default FullUserguide;
