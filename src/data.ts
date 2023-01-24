// data sources:
// https://github.com/awesome-css-group/awesome-css
// https://github.com/troxler/awesome-css-frameworks
// wikipedia
// https://www.w3.org/TR/?tag=css&status=REC
// https://www.w3.org/Style/CSS/specs.en.html
// https://www.webdesignmuseum.org/web-design-history/timeline-1998-2002

const ARTICLES = [
	{
		name: 'The End of Global CSS',
		url: 'https://medium.com/seek-blog/the-end-of-global-css-90d2a4a06284',
		description: 'An article by Mark Dalgleish about CSS Modules',
		createdAt: new Date('2015-05-20'),
		tags: ['articles'],
	},
	{
		name: 'Fear of Style Sheets',
		url: 'https://alistapart.com/article/fear/',
		description: 'An article by Jeffrey Zeldman in A List Apart',
		createdAt: new Date('1999-03-12'),
		tags: ['articles'],
	},
	{
		name: 'Challenging CSS Best Practices',
		url: 'https://www.smashingmagazine.com/2013/10/challenging-css-best-practices-atomic-approach/',
		description:
			"The term Atomic CSS' was coined by Thierry Koblenz in his foundational article in Smashing Magazine",
		createdAt: new Date('2013-10-21'),
		tags: ['articles'],
	},
	{
		name: 'Responsive Web Design',
		url: 'https://alistapart.com/article/responsive-web-design/',
		description:
			'Ethan Marcotte introduced the term "Responsive Web Design" in an article published in A List Apart',
		createdAt: new Date('2010-05-25'),
		tags: ['articles'],
	},
	{
		name: 'CSS Sprites',
		url: 'https://alistapart.com/article/sprites/',
		description:
			"In 'A List Apart' webzine, Dave Shea published an article entitled 'CSS Sprite: Image Slicing's Kiss of Death.' In the article, the author described a technique called CSS Sprites, the basis of which was to connect several smaller graphic elements into one larger image. The graphic elements are then placed on the website using the background-position feature. Thanks to CSS Sprites, a website loads faster because it only uploads one image, reducing the number of HTTP requests.",
		createdAt: new Date('2004-03-05'),
		tags: ['articles'],
	},
	{
		name: 'Box Model Hack',
		url: 'http://tantek.com/CSS/Examples/boxmodelhack.html',
		description:
			'The American-Turkish developer Tantek Çelik came up with a solution called Box Model Hack while working on Internet Explorer 5 for Mac. The application of this hack makes it possible to change the DOCTYPE declaration, which allows web developers to define which CSS Box Model will be used in Internet Explorer.',
		createdAt: new Date('2002-04-01'),
		tags: ['articles'],
	},
	{
		name: 'CSS: Simple Rules for Better Organization and More Efficiency',
		url: 'https://meiert.com/en/blog/css-organization-and-efficiency/',
		description:
			'A first mention of using declarations just once, for smaller CSS payload and improved maintainability',
		createdAt: new Date('2008-05-15'),
		tags: ['articles'],
	},
	{
		name: 'Atomic OOBEMITSCSS',
		url: 'https://www.sitepoint.com/atomic-oobemitscss/',
		description:
			'An article by Una Kravets in SitePoint about Atomic OOBEMITSCSS',
		createdAt: new Date('2015-07-07'),
		tags: ['articles'],
	},
	{
		name: 'Title CSS: A Simple Approach to CSS Class Naming',
		url: 'https://www.sitepoint.com/title-css-simple-approach-css-class-naming/',
		description: 'An article by Jon Cuthbert in SitePoint about Title CSS',
		createdAt: new Date('2015-03-25'),
		tags: ['articles'],
	},
	{
		name: '8 simple rules for a robust, scalable CSS architecture',
		url: 'https://github.com/jareware/css-architecture/blob/master/README.md',
		description:
			'The manifest of things by Jarno Rantanen, about managing CSS in large, complex web projects during my many years of professional web development. ',
		createdAt: new Date('2016-10-16'),
		tags: ['articles'],
	},
	{
		name: 'More Meaningful CSS',
		url: 'https://snook.ca/archives/html_and_css/more-meaningful-css',
		description: 'An article by Jonathan Snook',
		createdAt: new Date('2016-05-17'),
		tags: ['articles'],
	},
	{
		name: 'CSS and Scalability',
		url: 'http://mrmrs.io/writing/2016/03/24/scalable-css/',
		description: 'An article by Adam Morse',
		createdAt: new Date('2016-03-24'),
		tags: ['articles'],
	},
	{
		name: 'Can CSS Be Too Modular?',
		url: 'csswizardry.com/2015/03/can-css-be-too-modular/',
		description: 'An article in CSSWizardry by Harry Roberts',
		createdAt: new Date('2015-03-08'),
		tags: ['articles'],
	},
	{
		name: 'Side Effects in CSS',
		url: 'https://philipwalton.com/articles/side-effects-in-css/',
		description:
			'An article by Philip Walton in his website about the side effects of CSS',
		createdAt: new Date('2015-03-03'),
		tags: ['articles'],
	},
	{
		name: 'CSS Specificity Wars',
		url: 'https://stuffandnonsense.co.uk/archives/css_specificity_wars.html',
		description: 'Understanding CSS Specificity through Star Wars',
		createdAt: new Date('2005-10-07'),
		tags: ['articles'],
	},
	{
		name: "CSS Sprites: Image Slicing's Kiss of Death",
		url: 'https://alistapart.com/article/sprites/',
		description: 'An article by Dave Shea about CSS Sprites in A List Apart',
		createdAt: new Date('2004-03-05'),
		tags: ['articles'],
	},
	{
		name: 'Used and Abused',
		url: 'https://www.phase2technology.com/blog/used-and-abused-css',
		description:
			'Used and Abused - CSS Inheritance and Our Misuse of the Cascade - An article by Micah Godbolt',
		createdAt: new Date('2014-08-25'),
		tags: ['articles'],
	},
	{
		name: 'Enduring CSS',
		url: 'https://benfrain.com/enduring-css-writing-style-sheets-rapidly-changing-long-lived-projects/',
		description:
			'Enduring CSS: writing style sheets for rapidly changing, long-lived projects',
		createdAt: new Date('2014-08-07'),
		tags: ['articles'],
	},
	{
		name: 'MindBEMding',
		url: 'https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/',
		description:
			"MindBEMding - getting your head 'round BEM syntax - An article by Harry Roberts in CSSWizardry",
		createdAt: new Date('2013-01-25'),
		tags: ['articles'],
	},
	{
		name: 'CSS Architecture',
		url: 'https://philipwalton.com/articles/css-architecture/',
		description:
			'An article by Philip Walton from Google about the goals of good CSS architecture',
		createdAt: new Date('2012-11-16'),
		tags: ['articles'],
	},
	{
		name: 'SOLID CSS',
		url: 'https://blog.millermedeiros.com/solid-css/',
		description: 'An article by Miller Medeiros about SOLID principles and CSS',
		createdAt: new Date('2012-09-10'),
		tags: ['articles'],
	},
	{
		name: 'Shoot to Kill; CSS selector intent',
		url: 'https://csswizardry.com/2012/07/shoot-to-kill-css-selector-intent/',
		description:
			'An article by Harry Roberts in CSSWizardry about the selectors',
		createdAt: new Date('2012-07-17'),
		tags: ['articles'],
	},
	{
		name: 'The open/closed principle applied to CSS',
		url: 'https://csswizardry.com/2012/06/the-open-closed-principle-applied-to-css/',
		description:
			'An article by Harry Roberts in CSSWizardry about the selectors',
		createdAt: new Date('2012-06-21'),
		tags: ['articles'],
	},
	{
		name: 'Keep your CSS selectors short',
		url: 'https://csswizardry.com/2012/05/keep-your-css-selectors-short/',
		description:
			'An article by Harry Roberts in CSSWizardry about the selectors',
		createdAt: new Date('2012-05-15'),
		tags: ['articles'],
	},
	{
		name: 'The single responsibility principle applied to CSS',
		url: 'https://csswizardry.com/2012/04/the-single-responsibility-principle-applied-to-css/',
		description:
			'An article by Harry Roberts in CSSWizardry about the selectors',
		createdAt: new Date('2012-04-28'),
		tags: ['articles'],
	},
	{
		name: 'About HTML semantics and front-end architecture',
		url: 'https://nicolasgallagher.com/about-html-semantics-front-end-architecture/',
		description:
			'A collection of thoughts, experiences and ideas by Nicolas Gallagher',
		createdAt: new Date('2012-03-15'),
		tags: ['articles'],
	},
	{
		name: 'An Introduction To Object Oriented CSS',
		url: 'https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/',
		description: 'An article in Smashing Magazine by Louis Lazaris about OOCSS',
		createdAt: new Date('2011-12-12'),
		tags: ['articles'],
	},
	{
		name: 'CSS accent-color',
		url: 'https://web.dev/accent-color/',
		description: 'An article about accent color in web.dev',
		createdAt: new Date('2021-08-11'),
		tags: ['articles'],
	},
	{
		name: 'Simplifying Form Styles With accent-color',
		url: 'https://www.smashingmagazine.com/2021/09/simplifying-form-styles-accent-color/',
		description:
			'An article in Smashing Magazine about accent-color and form styles',
		createdAt: new Date('2021-09-23'),
		tags: ['articles'],
	},
];

const ATOMIC_CSS = [
	{
		name: 'Expressive CSS',
		url: 'http://johnpolacek.github.io/expressive-css/',
		description:
			'Readable Atomic CSS. Expressive CSS follows the atomic approach to writing lightweight, scalable CSS with utility classes that are easy to write and understand.',
		createdAt: new Date('2015-11-29'),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/johnpolacek/expressive-css/',
			},
		],
		tags: ['atomic-css'],
	},
	{
		name: 'Tachyons',
		url: 'http://tachyons.io/',
		description:
			'Built for designing. Create fast loading, highly readable, and 100% responsive interfaces with as little css as possible.',
		createdAt: new Date('2014-01-12'),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/tachyons-css/tachyons/',
			},
		],
		tags: ['atomic-css', 'functional-css'],
	},
	{
		name: 'Basscss',
		url: 'https://basscss.com/',
		description:
			'Low-level CSS toolkit - the original Functional/Utility/Atomic CSS library',
		createdAt: new Date('2013-10-13'),
		tags: ['atomic-css', 'functional-css'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/basscss/basscss',
			},
		],
	},
];

const BROWSERS = [
	{
		name: "Microsoft's Internet Explorer 3",
		url: 'https://www.w3.org/Style/CSS20/history.html',
		description:
			"The first commercial browser to support CSS was Microsoft's Internet Explorer 3, which was released in August 1996. IE3 reliably supports most of the color, background, font, and text properties, but it does not implement much of the box model.",
		createdAt: new Date('1996-08-01'),
		tags: ['browsers'],
	},
	{
		name: 'Mozilla Firefox 1.0',
		url: '',
		description:
			'Mozilla Corporation released a multiplatform web browser, Firefox 1.0. Compared with browsers from the Internet Explorer family, Firefox 1.0 was characteristic for its higher security, better web standards support, and a number of plug-ins that could be additionally installed. As a result, Firefox gained major popularity among users and exceeded 1 billion downloads between 2004 and 2009. The name Firefox was allegedly derived from the English translation of the Chinese name for the red panda.',
		createdAt: new Date('2004-11-09'),
		tags: ['browsers'],
	},
	{
		name: 'Safari 1.0',
		url: 'https://www.webdesignmuseum.org/web-design-history/safari-1-0-2003',
		description:
			'Apple introduced its own web browser, Safari 1.0. The browser uses the WebKit renderer to display website content. Safari 1.0 was initially available for download as a standalone program, but, in October 2003, it became the default Mac OS X 10.3 operating system browser.',
		createdAt: new Date('2003-06-23'),
		tags: ['browsers'],
	},
	{
		name: 'Opera 3.5',
		url: 'https://www.w3.org/Style/CSS20/history.html',
		description:
			'The third browser that ventured into CSS was Opera. The browser from the small Norwegian company made headlines in 1998 by being tiny (it fit on a floppy!) and customizable while supporting most features found in the larger offerings from Microsoft and Netscape. Opera 3.5 was released in November 1998, and supported most of CSS1.',
		createdAt: new Date('1998-11-01'),
		tags: ['browsers'],
	},
	{
		name: 'Netscape Navigator 2.0',
		url: '',
		description:
			'The Netscape Communications Corporation launched Netscape Navigator 2.0 as its new major product. The browser contained a wide range of innovations and enhancements. Among other features, Netscape Navigator 2.0 supported JavaScript, animated GIFs, the HTML tag <frame> and proprietary tag <blink>. Netscape Mail 2.0 was also part of version 2.0, making Netscape Navigator 2.0 a fully operational Web application package.',
		createdAt: new Date('1995-09-18'),
		tags: ['browsers'],
	},
	{
		name: 'Netscape Navigator 4',
		url: 'https://www.w3.org/Style/CSS20/history.html',
		description:
			'The next browser to announce support for CSS was Netscape Navigator, version 4.0. The Netscape implementation supports a broad range of features - for example, floating elements - but the Netscape developers did not have time to fully test all the features that are supposedly supported. The result is that many CSS properties cannot be used in Navigator 4.',
		createdAt: new Date('1997-06-01'),
		tags: ['browsers'],
	},
	{
		name: 'Google Chrome',
		url: 'https://www.webdesignmuseum.org/web-design-history/google-chrome-2008',
		description:
			"Google released the beta version of Google Chrome's freeware browser for Windows. In December 2008, the first stable version of Google Chrome 1.0 was released. Since January 2009, Chrome has been available for MacOS, and in February 2012, its first beta version for Android 4 was released. At the turn of April and May 2012, Chrome surpassed the popularity of Internet Explorer and became the most widely used web browser. In 2018, Google Chrome had more than 66% of the global market share.",
		createdAt: new Date('2008-09-02'),

		tags: ['browsers'],
	},
	{
		name: 'WorldWideWeb - the first browser',
		url: 'https://www.webdesignmuseum.org/web-design-history/worldwideweb-the-first-browser-1990',
		description:
			"At CERN, a Swiss research center, a British physicist and internet pioneer Tim Berners-Lee created the world's first web browser, called WorldWideWeb. The browser was also a simple WYSIWYG (What You See Is What You Get) editor for editing web pages. WorldWideWeb only worked with the NeXTStep operating system. Later, the browser was renamed Nexus to avoid confusion with the World Wide Web (WWW).",
		createdAt: new Date('1990-12-25'),
		tags: ['browsers'],
	},
	{
		name: 'ViolaWWW',
		url: 'https://www.webdesignmuseum.org/web-design-history/violawww-1992',
		description:
			"Pei-Yuan Wei developed the ViolaWWW browser for Unix while he was working at the University of California at Berkeley. ViolaWWW was the first browser to support scripting, table rendering and forms. The browser also contained a simple stylesheet to define the website's visual appearance. In March 1994, Pei-Yuan Wei released its last version, the lone developer no longer being able to keep up with the Mosaic Communications Corporation, which launched the Mosaic Netscape 0.9 browser the same year.",
		createdAt: new Date('1992-03-09'),
		tags: ['browsers'],
	},
	{
		name: 'Mosaic 1.0',
		url: '',
		description:
			'Students Marc Andreessen and Eric Bina from the University of Illinois programmed one of the first web browsers with a graphical interface. Mosaic (full name NCSA Mosaic) worked on multiple platforms including Windows and was available for free, thanks to which it gained worldwide popularity among the general public shortly after being launched. Its development officially ended on January 7, 1997.',
		createdAt: new Date('1993-11-30'),
		tags: ['browsers'],
	},
	{
		name: 'Opera 1.0',
		url: 'https://www.webdesignmuseum.org/web-design-history/opera-1-0-1995',
		description:
			"The Norwegian company Opera Software first introduced to the public a new MultiTorg Opera 1.0 web browser that used MDI (Multiple Document Interface) technology. The use of MDI enabled users to simultaneously open several windows of webpages within the browser. As of version 2.0, the browser's name was shortened to Opera.",
		createdAt: new Date('1995-04-10'),
		tags: ['browsers'],
	},
	{
		name: 'Internet Explorer 1.0',
		url: 'https://www.webdesignmuseum.org/web-design-history/internet-explorer-1-0-1995',
		description:
			'Microsoft released, as a part of its bonus package, the Microsoft Plus! Internet Jumpstart Kit (later also known as the Internet Connection Wizard) for Windows 95, which included Internet Explorer 1.0. In the original version of Windows 95, a web browser was not available, as Microsoft underestimated the potential of the rapidly developing Internet. The source code for Internet Explorer 1.0 was based on the older Spyglass Mosaic browser for which Microsoft purchased license rights. Internet Explorer 1.0 occupied only 1 MB of disk space and its features were considerably limited compared to other browsers at the time.',
		createdAt: new Date('1995-08-16'),
		tags: ['browsers'],
	},
	{
		name: 'Mosaic Netscape 0.9',
		url: 'https://www.webdesignmuseum.org/web-design-history/mosaic-netscape-0-9-1994',
		description:
			'The Mosaic Communications Corporation (renamed Netscape Communications Corporation on November 14, 1994) launched, under the name Mosaic Netscape 0.9, the first one in a series of browsers, called Netscape Navigator in the subsequent versions. Shortly after being released, Mosaic Netscape 0.9 and Netscape Navigator 1.0 (released on December 15, 1994) became widely popular and, within a few months, assumed a dominant position on the market.',
		createdAt: new Date('1994-10-13'),
		tags: ['browsers'],
	},
	{
		name: 'Microsoft Edge',
		url: 'https://www.webdesignmuseum.org/web-design-history/microsoft-edge-2015',
		description:
			"Microsoft released the first version of the Microsoft Edge web browser for Windows 10. Microsoft Edge was subsequently included as a default browser on Windows 10 Mobile and Xbox One operating systems, definitively replacing the older Internet Explorer 11 and Internet Explorer Mobile browsers. On December 6, 2018, Microsoft announced that Edge will no longer use its own EdgeHTML rendering engine and will be based on Chromium, Google's open source rendering engine.",
		createdAt: new Date('2015-03-30'),
		tags: ['browsers'],
	},

	{
		name: 'Internet Explorer 6',
		url: 'https://www.webdesignmuseum.org/web-design-history/internet-explorer-6-0-2001',
		description:
			'Less than two months before the official release of the Windows XP operating system, Microsoft released Internet Explorer 6.0. IE 6 was integrated into Windows XP and was also compatible with previous versions of the system down to Windows 98. Despite a significant amount of security flaws and lack of support for web standards, Internet Explorer 6.0 gained more than 80% market share in 2004. Together with earlier versions of IE 5.0 and IE 5.5, the proportion of Internet Explorer browsers in 2004 was more than 90%.',
		createdAt: new Date('2001-08-27'),
		tags: ['browsers'],
	},
	{
		name: 'Line Mode Browser',
		url: 'https://www.webdesignmuseum.org/web-design-history/line-mode-browser-1991',
		description:
			'A team made up of Tim Berners-Lee, Henrik Frystyk Nielsen and Nicola Pellow designed a simple browser called Line Mode Browser (The Libwww Line Mode Browser). This was the second browser ever made for the World Wide Web.',
		createdAt: new Date('1991-05-14'),
		tags: ['browsers'],
	},
	{
		name: 'Mozilla 1.0',
		url: 'https://www.webdesignmuseum.org/web-design-history/mozilla-1-0-2002',
		description:
			'Mozilla (also known as Mozilla.org) released the Mozilla 1.0 web browser. The basis for Mozilla 1.0 was Gecko, an open source rendering engine which significantly improved the support of web standards.',
		createdAt: new Date('2002-06-05'),
		tags: ['browsers'],
	},
];

const CSS_IN_JS = [
	{
		name: 'Aphrodite',
		url: 'https://github.com/Khan/aphrodite',
		description:
			'Framework-agnostic CSS-in-JS with support for server-side rendering, browser prefixing, and minimum CSS generation',
		createdAt: new Date('2015-10-04'),
		tags: ['css-in-js'],
	},
	{
		name: 'Babel-plugin-css-in-js',
		url: 'https://github.com/martinandert/babel-plugin-css-in-js',
		description:
			'A plugin for Babel v6 which transforms inline styles defined in JavaScript modules into class names so they become available to, e.g. the `className` prop of React elements.',
		createdAt: new Date('2015-11-15'),
		tags: ['tools', 'css-in-js'],
	},
	{
		name: 'Classy',
		url: 'http://inturn.github.io/classy/',
		description:
			'Classy makes styling React components composable, extensible, and simple. ',
		createdAt: new Date('2015-08-09'),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/inturn/classy',
			},
		],
		tags: ['tools', 'css-in-js'],
	},
	{
		name: 'csjs',
		url: 'https://github.com/rtsao/csjs',
		description:
			'CSJS allows you to write modular, scoped CSS with valid JavaScript.',
		createdAt: new Date('2015-09-20'),
		tags: ['tools', 'css-in-js'],
	},
	{
		name: 'CSS Loader',
		url: 'https://github.com/webpack-contrib/css-loader',
		description:
			'css-loader is a Webpack plugin that interprets @import and url() like import/require() and will resolve them.',
		createdAt: new Date('2012-04-01'),
		tags: ['tools', 'css-in-js'],
	},
	{
		name: 'JSS',
		url: 'https://cssinjs.org/',
		description:
			'JSS is an authoring tool for CSS which uses JavaScript as a host language.',
		createdAt: new Date('2014-10-12'),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/cssinjs/jss',
			},
		],
		tags: ['css-in-js', 'react'],
	},
	{
		name: 'react-styled',
		url: 'https://github.com/bloodyowl/react-styled',
		description: 'styled component for react & style-loader/usable',
		createdAt: new Date('2015-03-22'),
		tags: ['css-in-js', 'react'],
	},
	{
		name: 'react-with-styles',
		url: 'https://github.com/airbnb/react-with-styles',
		description:
			'Use CSS-in-JavaScript with themes for React without being tightly coupled to one implementation',
		createdAt: new Date('2016-08-21'),
		tags: ['css-in-js', 'react'],
	},
	{
		name: 'styled-jsx',
		url: 'https://github.com/vercel/styled-jsx',
		description: 'Full CSS support for JSX without compromises',
		createdAt: new Date('2016-12-04'),
		tags: ['css-in-js', 'react'],
	},
	{
		name: 'styled-components',
		url: 'https://styled-components.com/',
		description:
			'Visual primitives for the component age. Use the best bits of ES6 and CSS to style your apps without stress 💅',
		createdAt: new Date('2016-08-14'),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/styled-components/styled-components',
			},
		],
		tags: ['css-in-js', 'react'],
	},
	{
		name: 'stylin',
		url: 'https://github.com/sultan99/stylin',
		description: 'A built-time CSS library for styling React components.',
		createdAt: new Date('2021-02-07'),
		tags: ['css-in-js', 'react'],
	},
	{
		name: 'emotion',
		url: 'https://emotion.sh/',
		description:
			'👩‍🎤 CSS-in-JS library designed for high performance style composition',
		createdAt: new Date('2017-05-21'),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/emotion-js/emotion',
			},
		],
		tags: ['css-in-js', 'react'],
	},
	{
		name: 'glamor',
		url: 'https://github.com/threepointone/glamor',
		description: 'inline css for react et al',
		createdAt: new Date('2016-07-17'),
		tags: ['css-in-js', 'react'],
	},
	{
		name: 'glamorous',
		url: 'https://glamorous.rocks/',
		description: 'Maintainable CSS with React',
		createdAt: new Date('2017-04-02'),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/paypal/glamorous',
			},
		],
		tags: ['css-in-js', 'react'],
	},
	{
		name: 'radium',
		url: 'https://github.com/FormidableLabs/radium',
		description: 'A toolchain for React component styling',
		createdAt: new Date('2015-01-04'),
		tags: ['css-in-js', 'react'],
	},
	{
		name: 'Linaria',
		url: 'https://linaria.dev/',
		description: 'Zero-runtime CSS in JS library.',
		createdAt: new Date('2017-05-21'),
		tags: ['tools', 'css-in-js'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/callstack/linaria',
			},
		],
	},
	{
		name: 'Stitches',
		url: 'https://stitches.dev/',
		description:
			'CSS-in-JS with near-zero runtime, SSR, multi-variant support, and a best-in-class developer experience.',
		createdAt: new Date('2020-04-12'),
		tags: ['tools', 'css-in-js'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/stitchesjs/stitches',
			},
		],
	},
	{
		name: 'vanilla-extract',
		url: 'https://vanilla-extract.style/',
		description:
			'Zero-runtime Stylesheets in TypeScript. Use TypeScript as your preprocessor. Write type‑safe, locally scoped classes, variables and themes, then generate static CSS files at build time.',
		createdAt: new Date('2021-02-21'),
		tags: ['tools', 'css-in-js'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/vanilla-extract-css/vanilla-extract',
			},
		],
	},
	{
		name: 'astroturf',
		url: 'https://4catalyzer.github.io/astroturf/',
		description: 'An "artificial" CSS-in-JS for those that want it all.',
		createdAt: new Date('2016-10-16'),
		tags: ['tools', 'css-in-js'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/4Catalyzer/astroturf',
			},
		],
	},
];

const FRAMEWORKS = [
	{
		name: 'Bootstrap',
		url: 'https://getbootstrap.com',
		description: 'The most popular HTML, CSS, and JS library in the world.',
		createdAt: new Date(2011, 7, 19),
		tags: ['frameworks'],
	},
	{
		name: 'Foundation',
		url: 'https://get.foundation/',
		description:
			'Foundation is a free and open-source responsive front-end framework, providing a responsive grid and HTML and CSS UI components, templates, and code snippets, including typography, forms, buttons, navigation and other interface elements, as well as optional functionality provided by JavaScript extensions. Foundation is an open source project, and was formerly maintained by ZURB. Since 2019, Foundation has been maintained by volunteers',
		createdAt: new Date(2011, 8, 1),
		tags: ['frameworks'],
	},
	{
		name: 'Blueprint',
		url: 'http://www.blueprintcss.org/',
		description:
			'Blueprint is a CSS framework, which aims to cut down on your development time. It gives you a solid foundation to build your project on top of, with an easy-to-use grid, sensible typography, useful plugins, and even a stylesheet for printing.',
		createdAt: new Date(2007, 7, 3),
		links: [
			{
				name: 'Launch post',
				url: 'https://web.archive.org/web/20080516223431/http://bjorkoy.com/past/2007/8/3/launch_blueprint_a_css_framework/',
			},
			{
				name: 'Wikipedia',
				url: 'https://en.wikipedia.org/wiki/Blueprint_(CSS_framework)',
			},
		],
		tags: ['frameworks'],
	},
	{
		name: 'YAML',
		url: 'http://www.yaml.de/',
		description:
			'A modular CSS framework for truly flexible, accessible and responsive websites',
		createdAt: new Date(2005, 9, 1),
		links: [
			{
				name: 'Wikipedia',
				url: 'https://en.wikipedia.org/wiki/YAML_(framework)',
			},
		],
		tags: ['frameworks'],
	},
	{
		name: 'YUI',
		url: 'https://clarle.github.io/yui3/',
		description:
			'YUI - Yahoo! User Interface Library is a free, open source JavaScript and CSS library for building richly interactive web applications.',
		createdAt: new Date(2006, 1, 13),
		links: [
			{
				name: 'Wikipedia',
				url: 'https://en.wikipedia.org/wiki/YUI_Library#CSS_resources',
			},
		],
		tags: ['frameworks'],
	},
	{
		name: 'Tailwind CSS',
		url: 'https://tailwindcss.com/',
		description:
			'A utility-first CSS framework packed with classes like flex, pt-4, text-center and rotate-90 that can be composed to build any design, directly in your markup.',
		createdAt: new Date('2017-07-16'),
		links: [
			{
				name: 'Wikipedia',
				url: '',
			},
			{
				name: 'Github',
				url: 'https://github.com/tailwindlabs/tailwindcss',
			},
		],
		tags: ['frameworks'],
	},
	{
		name: 'Bulma',
		url: 'https://bulma.io/',
		description:
			'Bulma: the modern CSS framework that just works. Bulma is a free, open source framework that provides ready-to-use frontend components that you can easily combine to build responsive web interfaces.',
		createdAt: new Date('2016-01-24'),
		tags: ['frameworks'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/jgthms/bulma',
			},
		],
	},
	{
		name: 'inuitcss',
		url: 'https://github.com/inuitcss/inuitcss',
		description:
			'Extensible, scalable, Sass-based, OOCSS framework for large and long-lasting UI projects.',
		createdAt: new Date('2016-06-19'),
		tags: ['frameworks'],
	},
	{
		name: 'Pure',
		url: 'https://purecss.io/',
		description:
			'A set of small, responsive CSS modules that you can use in every web project.',
		createdAt: new Date('2013-05-15'),
		tags: ['frameworks', 'lightweight'],
	},
	{
		name: 'Milligram',
		url: 'https://milligram.io/',
		description: 'A minimalist CSS framework',
		createdAt: new Date('2015-12-26'),
		tags: ['frameworks', 'lightweight'],
	},
	{
		name: 'Picnic CSS',
		url: 'https://picnicss.com/',
		description: 'Lightweight and Beautiful library',
		createdAt: new Date('2014-08-31'),
		tags: ['frameworks', 'lightweight'],
	},
	{
		name: 'Chota',
		url: 'https://jenil.github.io/chota/',
		description: 'A micro (~3kb) CSS framework.',
		createdAt: new Date('2017-04-01'),
		tags: ['frameworks', 'lightweight'],
	},
	{
		name: 'UIKit',
		url: 'https://getuikit.com/',
		description:
			'A lightweight and modular front-end framework for developing fast and powerful web interfaces.',
		createdAt: new Date('2015-11-08'),
		tags: ['frameworks'],
	},
	{
		name: 'Primer',
		url: 'https://primer.style/',
		description:
			"Design, build, and create with GitHub's design system. Primer was created for GitHub by GitHub. We love it so much, we chose to open-source it to allow the community to design and build their own projects with Primer.",
		createdAt: new Date('2015-03-15'),
		tags: ['frameworks'],
	},
	{
		name: 'Carbon Design System',
		url: 'https://carbondesignsystem.com/',
		description:
			"Carbon is IBM's open source design system for products and digital experiences. With the IBM Design Language as its foundation, the system consists of working code, design tools and resources, human interface guidelines, and a vibrant community of contributors.",
		createdAt: new Date('2015-06-07'),
		tags: ['frameworks'],
	},
	{
		name: 'Fomantic-UI',
		url: 'https://fomantic-ui.com/',
		description:
			'The official community fork of Semantic-UI. Build beautiful websites fast, with concise HTML, intuitive javascript, and simplified debugging.',
		createdAt: new Date('2013-04-07'),
		tags: ['frameworks'],
	},
	{
		name: 'Pico.css',
		url: 'https://picocss.com/',
		description:
			'Minimal CSS Framework for semantic HTML. Elegant styles for all natives HTML elements without .classes and dark mode automatically enabled.',
		createdAt: new Date('2019-11-24'),
		tags: ['frameworks'],
	},
	{
		name: 'Blaze UI',
		url: 'https://www.blazeui.com/',
		description:
			'Framework-free open source UI toolkit. Blaze UI provides great structure for building websites quickly with a scalable and maintainable foundation.',
		createdAt: new Date('2020-04-05'),
		tags: ['frameworks'],
	},
	{
		name: 'Cirrus',
		url: 'https://cirrus-ui.netlify.app/',
		description:
			'A component-and-utility-centric SCSS framework designed for rapid prototyping. Use beautiful pre-built components to bootstrap your next project and utility classes to polish your final design.',
		createdAt: new Date('2016-12-18'),
		tags: ['frameworks'],
	},
	{
		name: 'turretcss',
		url: 'https://turretcss.com/',
		description:
			'Developed for design, turretcss is a styles and browser behaviour normalisation framework for rapid development of responsive and accessible websites.',
		createdAt: new Date('2013-11-10'),
		tags: ['frameworks'],
	},
	{
		name: 'Vanilla',
		url: 'https://vanillaframework.io/',
		description:
			'A simple, extensible CSS framework. Backed by open-source code and written in Sass by the Canonical Web Team.',
		createdAt: new Date('2015-02-22'),
		tags: ['frameworks'],
	},
	{
		name: 'PatternFly',
		url: 'https://www.patternfly.org/v4/',
		description:
			'Build scalable experiences in the open. PatternFly is an open source design system built to drive consistency and unify teams.',
		createdAt: new Date('2017-11-05'),
		tags: ['frameworks'],
	},
	{
		name: 'HiQ',
		url: 'https://jonathanharrell.github.io/hiq/',
		description:
			'A high-IQ CSS framework. Jump-start your styling with a lightweight, easily customizable framework that is built with CSS custom properties and modern best practices.',
		createdAt: new Date('2017-05-07'),
		tags: ['frameworks'],
	},
];

const METHODOLOGY = [
	{
		name: 'OOCSS',
		url: 'https://github.com/stubbornella/oocss',
		description:
			"It's an approach for writing CSS that's fast, maintainable, and standards-based. It adds much needed predictability to CSS so that even beginners can participate in writing beautiful websites.",
		createdAt: new Date(2009, 1, 4),
		links: [
			{
				name: 'Slideshare',
				url: 'https://www.slideshare.net/stubbornella/object-oriented-css',
			},
			{
				name: 'Github',
				url: 'https://github.com/stubbornella/oocss',
			},
		],
		tags: ['methodology', 'modular css'],
	},
	{
		name: 'BEM',
		url: 'https://getbem.com/introduction/',
		description: 'Block Element Modifier',
		createdAt: new Date(2014, 7, 24),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/getbem/getbem.github.io',
			},
		],
		tags: ['methodology', 'modular css'],
	},
	{
		name: 'SMACSS',
		url: 'http://smacss.com/',
		description:
			"SMACSS (pronounced 'smacks') is more style guide than rigid framework. There is no library within here for you to download or install.",
		createdAt: new Date(2011, 0, 1),
		tags: ['methodology', 'modular css'],
	},
	{
		name: 'SUIT CSS',
		url: 'http://suitcss.github.io/',
		description:
			'SUIT CSS is a reliable and testable styling methodology for component-based UI development. A collection of CSS packages and build tools are available as modules. SUIT CSS plays well with React, Ember, Angular, and other component-based approaches to UI development.',
		createdAt: new Date(2012, 8, 30),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/suitcss',
			},
		],
		tags: ['methodology', 'modular css'],
	},
	{
		name: 'Maintainable CSS',
		url: 'https://maintainablecss.com/',
		description:
			'MaintainableCSS is an approach to writing modular, scalable and maintainable CSS for small and large codebases. You can learn it in 20 minutes and implement it immediately in your project.',
		createdAt: new Date('2018-09-30'),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/adamsilver/maintainablecss.com/',
			},
		],
		tags: ['methodology'],
	},

	{
		name: 'Atomic design',
		url: 'https://bradfrost.com/blog/post/atomic-web-design/',
		description:
			'Atomic design is methodology for creating design systems. There are five distinct levels in atomic design: atoms, molecules, organisms, templates and pages',
		createdAt: new Date('2013-06-10'),
		tags: ['methodology'],
		links: [
			{
				name: 'Book',
				url: 'http://atomicdesign.bradfrost.com/',
			},
		],
	},
	{
		name: 'ITCSS',
		url: 'https://itcss.io/',
		description:
			'A sane, scalable, managed CSS architecture from CSS Wizardry by Harry Roberts',
		createdAt: new Date('2014-05-01'),
		tags: ['methodology'],
	},
	{
		name: 'Title CSS',
		url: 'https://github.com/cuth/Title-CSS',
		description:
			'Title CSS is an organizational technique geared to help you write beautiful and maintainable CSS. Similar to BEM, Title CSS aims to make CSS more readable by giving visual cues.',
		createdAt: new Date('2014-02-25'),
		tags: ['methodology'],
	},
	{
		name: 'Idiomatic CSS',
		url: 'https://github.com/necolas/idiomatic-css',
		description: 'Principles of writing consistent, idiomatic CSS.',
		createdAt: new Date('2012-05-20'),
		tags: ['methodology'],
	},
	{
		name: 'Point North',
		url: 'http://pointnorth.io/#base-browser-styling',
		description:
			'North is a set of standards and best practices for developing modern web based properties.',
		createdAt: new Date('2013-11-03'),
		tags: ['methodology'],
	},
	{
		name: 'Kickoff CSS',
		url: 'http://trykickoff.com/learn/css.html#namingscheme',
		description:
			'Kickoff uses a bespoke naming scheme for classnames, inspired loosely by the BEM naming scheme.',
		createdAt: new Date('2016-04-26'),
		tags: ['methodology'],
	},
];

const PREPROCESSORS = [
	{
		name: 'Sass',
		url: 'https://sass-lang.com/',
		description:
			'Sass is the most mature, stable, and powerful professional grade CSS extension language in the world.',
		createdAt: new Date(2006, 0, 1),
		tags: ['preprocessors'],
	},
	{
		name: 'LESS',
		url: 'http://lesscss.org/',
		description:
			'Less (Leaner Style Sheets; sometimes stylized as LESS) is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets (CSS) and run on the client side or server side.',
		createdAt: new Date(2009, 0, 1),
		links: [
			{
				name: 'Wikipedia',
				url: 'https://en.wikipedia.org/wiki/Less_(stylesheet_language)',
			},
		],
		tags: ['preprocessors'],
	},
	{
		name: 'Stylus',
		url: 'http://stylus-lang.com/',
		description:
			'Stylus is a dynamic stylesheet preprocessor language that is compiled into Cascading Style Sheets (CSS). Its design is influenced by Sass and LESS.',
		createdAt: new Date(2010, 0, 1),
		links: [
			{
				name: 'Wikipedia',
				url: 'https://en.wikipedia.org/wiki/Stylus_(stylesheet_language)',
			},
			{
				name: 'Github',
				url: 'https://github.com/stylus/stylus',
			},
		],
		tags: ['preprocessors'],
	},
	{
		name: 'STYLIS',
		url: 'https://stylis.js.org/',
		description: 'A Light-weight CSS Preprocessor.',
		createdAt: new Date(2016, 10, 27),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/thysultan/stylis',
			},
		],
		tags: ['preprocessors'],
	},
	{
		name: 'PostCSS',
		url: 'https://postcss.org/',
		description:
			'PostCSS is a tool for transforming styles with JS plugins. These plugins can lint your CSS, support variables and mixins, transpile future CSS syntax, inline images, and more.',
		createdAt: new Date(2013, 8, 1),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/postcss/postcss',
			},
		],
		tags: ['preprocessors'],
	},
];

const RESETS = [
	{
		name: "Eric Meyer's CSS Resets",
		url: 'https://meyerweb.com/eric/tools/css/reset/index.html',
		description:
			"A CSS Reset style sheet is a list of rules that 'reset' all of the default browser styles",
		createdAt: new Date(2007, 3, 18),
		tags: ['resets'],
	},
	{
		name: 'undohtml.css',
		url: 'http://tantek.com/log/2004/undohtml.css',
		description:
			"The oldest CSS reset by Tantek Çelik' to undo some of the default styling of common (X)HTML browsers",
		createdAt: new Date(2004, 0, 1),
		links: [
			{
				name: 'Killer Collection of CSS Resets',
				url: 'https://perishablepress.com/a-killer-collection-of-global-css-reset-styles/',
			},
		],
		tags: ['resets'],
	},
	{
		name: 'Normalize.css',
		url: 'https://necolas.github.io/normalize.css/',
		description:
			'Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.',
		createdAt: new Date(2012, 0, 1),
		tags: ['resets'],
	},
	{
		name: 'minireset.css',
		url: 'https://jgthms.com/minireset.css/',
		description: 'A tiny modern CSS reset',
		createdAt: new Date('2016-08-21'),
		tags: ['resets'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/jgthms/minireset.css',
			},
		],
	},
	{
		name: 'reseter.css',
		url: 'https://github.com/resetercss/reseter.css',
		description:
			'Reseter.css - A Futuristic Alternative To Normalize.css And CSS Resets ',
		createdAt: new Date('2021-02-07'),
		tags: ['resets'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/resetercss/reseter.css',
			},
		],
	},
	{
		name: 'sanitize.css',
		url: 'https://csstools.github.io/sanitize.css',
		description: 'A best-practices CSS foundation ',
		createdAt: new Date('2012-11-04'),
		tags: ['resets'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/csstools/sanitize.css',
			},
		],
	},
	{
		name: 'css-unstyle',
		url: 'https://github.com/Martin-Pitt/css-unstyle',
		description:
			'Unstyle CSS - Forget inconsistencies, let us start with a blank slate. ',
		createdAt: new Date('2014-05-11'),
		tags: ['resets'],
	},
];

const STANDARDS = [
	{
		name: 'Proposal',
		url: 'https://www.w3.org/People/howcome/p/cascade.html',
		description: 'Håkon Wium Lie proposed the idea of CSS.',
		createdAt: new Date('1994-10-10'),
		tags: ['standards'],
	},
	{
		name: 'CSS1',
		url: 'http://www.w3.org/TR/CSS1/',
		description: 'The first version of CSS was published.',
		createdAt: new Date('1996-12-17'),
		tags: ['standards'],
	},
	{
		name: 'CSS2',
		url: 'http://www.w3.org/TR/2008/REC-CSS2-20080411/',
		description:
			'CSS 2 was released and work on CSS 3 began. CSS 3 was very different from the other versions, fot instead of being a single monolithic specification, it was published as a set of separate documents known as modules.',
		createdAt: new Date('1998-05-12'),
		tags: ['standards'],
	},
	{
		name: 'CSS2.1',
		url: 'http://www.w3.org/TR/2011/REC-CSS2-20110607/',
		description: 'CSS 2.1 was released, which fixed the errors found in CSS 2',
		createdAt: new Date('2011-05-07'),
		tags: ['standards'],
	},
	{
		name: 'CSS Proposal',
		url: 'https://www.w3.org/Style/CSS20/history.html',
		description:
			'At the next WWW conference in April 1995, CSS was presented again. Both Bert and Håkon were there',
		createdAt: new Date('1995-04-01'),
		tags: ['standards'],
	},
	{
		name: 'www-style',
		url: 'https://www.w3.org/Style/CSS20/history.html',
		description:
			'The www-style mailing list was created in May 1995, and the discussions there have often influenced the development of the CSS specifications.',
		createdAt: new Date('1995-05-01'),
		tags: ['standards'],
	},
	{
		name: 'W3C.org',
		url: 'https://www.webdesignmuseum.org/web-design-history/w3c-org-1994',
		description:
			'Tim Berners-Lee founded an international organization called World Wide Web Consortium (W3C). The main objective of the consortium is the development of Web standards for the World Wide Web (WWW). For example, W3C developed standards for HTML, XHML, XML, or CSS markup languages. Another aim of the organization is education and development of Web Accessibility Rules (WCAG).',
		createdAt: new Date('1994-10-13'),
		tags: ['standards'],
	},
	{
		name: 'W3C',
		url: 'https://www.w3.org/Style/CSS20/history.html',
		description:
			'In 1995, the World Wide Web Consortium (W3C) also became operational. Companies were joining the Consortium at a high rate and the organization became established. Workshops on various topics were found to be a successful way for W3C members and staff to meet and discuss future technical development.',
		createdAt: new Date('1995-06-01'),
		tags: ['standards'],
	},
	{
		name: 'HTML ERB',
		url: 'https://www.w3.org/Style/CSS20/history.html',
		description:
			'At the end of 1995, W3C set up the HTML Editorial Review Board (HTML ERB) to ratify future HTML specifications. Because style sheets were within the sphere of interest of the members of the new group, the CSS specification was taken up as a work item with the goal of making it into a W3C Recommendation.',
		createdAt: new Date('1996-12-01'),
		tags: ['standards'],
	},
	{
		name: 'CSS Working group in W3C',
		url: 'https://www.w3.org/Style/CSS20/history.html',
		description:
			"In February 1997, CSS got its own working group inside W3C and the new group set out to work on the features which CSS1 didn't address.",
		createdAt: new Date('1997-02-01'),
		tags: ['standards'],
	},

	{
		name: 'The acid test',
		url: 'https://www.w3.org/Style/CSS20/history.html',
		description:
			'Todd Fahrner created the acid test in October 1998, which became the ultimate challenge',
		createdAt: new Date('1998-10-01'),
		tags: ['standards'],
	},

	{
		name: 'Media Queries',
		url: 'https://www.w3.org/TR/2009/CR-css3-mediaqueries-20090423/',
		description:
			'Media Queries became a W3C Candidate Recommendation. A media query consists of a media type and zero or more expressions to limit the scope of style sheets. By using media queries, presentations can be tailored to a specific range of output devices without changing the content itself.',
		createdAt: new Date('2009-04-23'),
		tags: ['standards'],
	},
	{
		name: 'CSS Grid in Edge browser',
		url: 'https://alistapart.com/article/the-story-of-css-grid-from-its-creators/',
		description:
			"On October 17th, Microsoft's Edge browser shipped its implementation of CSS Grid. This is a milestone for a number of reasons. First, it means that all major browsers now support this incredible layout tool. Second, it means that all major browsers rolled out their implementations in a single year(!), a terrific example of standards success and cross-browser collaboration. But third, and perhaps most interestingly, it closes the loop on a process that has been more than 20 years in the making.",
		createdAt: new Date('2017-10-17'),
		tags: ['standards'],
		links: [
			{
				name: 'CanIUse',
				url: 'https://caniuse.com/?search=css%20grid',
			},
		],
	},
	{
		name: 'CSS Grid Layout Module Level 1',
		url: 'https://www.w3.org/TR/css-grid-1/',
		description:
			'CSS Grid Layout Module Level 1 became a  W3C Candidate Recommendation. This CSS module defines a two-dimensional grid-based layout system, optimized for user interface design. In the grid layout model, the children of a grid container can be positioned into arbitrary slots in a predefined flexible or fixed-size layout grid.',
		createdAt: new Date('2016-09-29'),
		tags: ['standards'],
	},
	{
		name: 'Rebecca Purple',
		url: 'https://lists.w3.org/Archives/Public/www-style/2014Jun/0312.html',
		description:
			"Following a proposal sent to social media, it is suggested to add the named color 'rebeccapurple', for value #663399, to  CSS Color Level 4. This is a tribute to Eric Meyer's daughter who recently passed away and a mark of support from all the  Web community to Eric.",
		createdAt: new Date('2014-06-22'),
		tags: ['standards'],
		links: [
			{
				name: "Eric Meyer's site",
				url: 'https://meyerweb.com/eric/thoughts/2014/06/19/rebeccapurple/',
			},
		],
	},
	{
		name: 'Media Queries',
		url: 'https://www.w3.org/TR/mediaqueries-3/',
		description:
			'The W3C consortium released the first draft of the Media Queries specification. The original idea for the Media Queries module appeared in the first draft of the CSS specification by Norwegian programmer Håkon Wium Lie in October 1994. However, this proposal did not become part of CSS1. The CSS3 Media Queries module allows web developers to adjust the rendering of web page content according to various factors such as screen resolution. Currently, Media Queries are one of the basic techniques used in responsive web design.',
		createdAt: new Date('2001-04-04'),
		tags: ['standards'],
	},
	{
		name: 'SVG 1.0',
		url: 'https://www.w3.org/TR/SVG11/',
		description:
			'Scalable Vector Graphics (SVG) is a graphical vector file format based on the XML markup language. SVG has become the basic open format for vector graphics on web pages. The SVG format has been developed since 1998 by W3C and is currently fully supported by all major browsers.',
		createdAt: new Date('2001-09-04'),
		tags: ['standards'],
	},
	{
		name: 'CSS Grid',
		url: 'https://www.w3.org/TR/2007/WD-css3-grid-20070905/',
		description:
			'W3C released the first proposal of the CSS Grid specification. This CSS module defines a set of properties for creating a layout fitted into a regular grid that consists of rows and columns. The CSS Grid makes it easy to create complex and full-page layouts without the need of using cascading style layout methods involving float and positioning. CSS Grid features are currently supported by most major browsers.',
		createdAt: new Date('2007-09-05'),
		tags: ['standards'],
	},
	{
		name: 'CSS Flexbox Layout',
		url: 'https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/',
		description:
			"W3C issued the first proposal of the CSS Flexible box layout (Flexbox) specification. Flexbox introduces a new way of creating web layout, an easier alignment of elements and a better distribution of space with respect to the device's display resolution. Flexbox features are currently supported in most major browsers.",
		createdAt: new Date('2009-07-23'),
		tags: ['standards'],
	},
	{
		name: 'Web 2.0',
		url: 'https://www.webdesignmuseum.org/web-design-history/web-2-0-1999',
		description:
			"Darcy DiNucci published an article entitled 'Fragmented Future' in the Print magazine, in which the term Web 2.0 was first introduced. The term refers to the development phase of the Web in which the content of websites is created and shared primarily by the users themselves. Typical Web 2.0 examples include social networking sites, web forums, internet encyclopedias, or photo/video sharing portals. In 2004, Tim O'Reilly and Dale Dougherty held the first Web 2.0 conference, during which the term Web 2.0 was brought to the attention of a wider public.",
		createdAt: new Date('1999-04-01'),
		tags: ['standards'],
		links: [
			{
				name: 'Article (PDF)',
				url: 'http://www.darcyd.com/fragmented_future.pdf',
			},
		],
	},
	{
		name: 'WOFF 1.0',
		url: 'https://www.w3.org/Submission/2010/03/',
		description:
			'Mozilla Foundation, Opera Software and Microsoft submitted a proposal for the specification of a new Web Open Font Format (WOFF) to the W3C. The WOFF fonts are currently supported by all major browsers.',
		createdAt: new Date('2010-04-08'),
		tags: ['standards'],
	},
	{
		name: 'HTML 5',
		url: 'https://www.w3.org/TR/2014/REC-html5-20141028/',
		description:
			'W3C adopted the final recommendation for the HTML5 markup language. The HTML5 version has brought an improved browser multimedia playback support, new semantic tags that better define page structure, offline application support, and the <canvas> tag that can interpret vector graphics with an option to insert images.',
		createdAt: new Date('2014-10-28'),
		tags: ['standards'],
	},
	{
		name: 'Material Design',
		url: '',
		description:
			"Google introduced a new graphic style called Material Design at the Google I/O conference. Since 2015, Google has redesigned most of its applications and services using the consistent visual style of Material Design. According to Google's definition, Material Design is a \"visual language that synthesizes the classic principles of good design with the innovation and the possibility of technology and science.'",
		createdAt: new Date('2014-06-25'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries - First Public Draft',
		url: 'https://www.w3.org/TR/2001/WD-css3-mediaqueries-20010404/',
		description:
			'HTML4 and CSS2 currently support media-dependent style sheets tailored for different media types. For example, a document may use sans-serif fonts when displayed on a screen and serif fonts when printed. "Screen" and "print" are two of the media types that have been defined. To describe in more detail what type of devices a style sheet applies to, this document proposes media queries.',
		createdAt: new Date('2001-04-04'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries - Working Draft',
		url: 'https://www.w3.org/TR/2001/WD-css3-mediaqueries-20010517/',
		description: 'Working draft version of Media Queries published',
		createdAt: new Date('2001-05-17'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries - Last Call Working Draft',
		url: 'https://www.w3.org/TR/2002/WD-css3-mediaqueries-20020123/',
		description:
			'This document is produced by the CSS Working Group and is one of the modules of the upcoming CSS3 specification. This is a  W3C Last Call Working Draft for review by W3C members and other interested parties.',
		createdAt: new Date('2002-01-23'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries - Candidate Recommendation Snapshot',
		url: 'https://www.w3.org/TR/2002/CR-css3-mediaqueries-20020708',
		description:
			'Media queries became part of the W3C Candidate recommendation snapshot',
		createdAt: new Date('2002-07-08'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries - Candidate Recommendation Snapshot',
		url: 'https://www.w3.org/TR/2007/CR-css3-mediaqueries-20070606',
		description:
			'Media queries became part of the W3C Candidate recommendation snapshot',
		createdAt: new Date('2007-06-06'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries - Last Call Working Draft',
		url: 'https://www.w3.org/TR/2008/WD-css3-mediaqueries-20081015/',
		description:
			'This is the last call for the working draft of Media queries specificiation',
		createdAt: new Date('2008-10-15'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries - Candidate Recommendation Snapshot',
		url: 'https://www.w3.org/TR/2009/CR-css3-mediaqueries-20090423/',
		description:
			'Media queries became part of the W3C Candidate recommendation snapshot',
		createdAt: new Date('2009-04-23'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries - Candidate Recommendation Snapshot',
		url: 'https://www.w3.org/TR/2009/CR-css3-mediaqueries-20090915/',
		description:
			'Media queries became part of the W3C Candidate recommendation snapshot',
		createdAt: new Date('2009-09-15'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries - Candidate Recommendation Snapshot',
		url: 'https://www.w3.org/TR/2010/CR-css3-mediaqueries-20100727/',
		description:
			'Media queries became part of the W3C Candidate recommendation snapshot',
		createdAt: new Date('2010-07-27'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries - Proposed Recommendation',
		url: 'https://www.w3.org/TR/2012/PR-css3-mediaqueries-20120426/',
		description: 'Media queries became a W3C proposed recommendation',
		createdAt: new Date('2012-04-26'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries Recommendation',
		url: 'https://www.w3.org/TR/2012/REC-css3-mediaqueries-20120619/',
		description: 'Media queries became a W3C recommendation',
		createdAt: new Date('2012-06-19'),
		tags: ['standards'],
	},
	{
		name: 'Media Queries Level 3 Recommendation',
		url: 'https://www.w3.org/TR/2022/REC-mediaqueries-3-20220405/',
		description: 'Media Queries Level 3 became a W3C recommendation',
		createdAt: new Date('2022-04-05'),
		tags: ['standards'],
	},
	{
		name: 'Selectors - First Public Draft',
		url: 'https://www.w3.org/TR/1999/WD-CSS3-selectors-19990803',
		description:
			'This document is the first draft of one of the "modules" for the upcoming CSS3 specification. It not only describes the selectors that already exist in CSS1 and CSS2, but also proposes new selectors for CSS3 as well as for other languages that may need them.',
		createdAt: new Date('1999-08-03'),
		tags: ['standards'],
	},
	{
		name: 'Selectors Level 3 - Proposed Recommendation',
		url: 'https://www.w3.org/TR/2009/PR-css3-selectors-20091215/',
		description:
			'Selectors Level 3 became a W3C proposed recommendation. This document describes the selectors that already exist in CSS1 [CSS1] and CSS2 [CSS21], and further introduces new selectors for CSS3 and other languages that may need them.',
		createdAt: new Date('2009-12-15'),
		tags: ['standards'],
	},
	{
		name: 'Selectors Level 3 - Recommendation',
		url: 'https://www.w3.org/TR/2011/REC-css3-selectors-20110929/',
		description: 'Selectors Level 3 became a W3C recommendation.',
		createdAt: new Date('2011-09-29'),
		tags: ['standards'],
	},
	{
		name: 'Selectors Level 4 - First Public Draft',
		url: 'https://www.w3.org/TR/2011/WD-selectors4-20110929/',
		description:
			'Selectors Level 4 describes the selectors that already exist in [SELECT], and further introduces new selectors for CSS and other languages that may need them. Publication as a Working Draft does not imply endorsement by the W3C Membership. This is a draft document and may be updated, replaced or obsoleted by other documents at any time. It is inappropriate to cite this document as other than work in progress.',
		createdAt: new Date('2011-09-29'),
		tags: ['standards'],
	},
	{
		name: 'CSS Conditional Rules Module Level 5',
		url: 'https://www.w3.org/TR/css-conditional-5/',
		description: 'W3C First Public Working Draft',
		createdAt: new Date('2021-12-21'),
		tags: ['standards'],
	},
	{
		name: 'CSS Color Module Level 4',
		url: 'https://www.w3.org/TR/2016/WD-css-color-4-20160705/',
		description: 'First Public Working Draft published',
		createdAt: new Date('2016-07-05'),
		tags: ['standards'],
	},
	{
		name: 'CSS Color Module Level 4',
		url: 'https://www.w3.org/TR/2022/CRD-css-color-4-20221101/',
		description: 'W3C Candidate Recommendation Draft published',
		createdAt: new Date('2022-11-01'),
		tags: ['standards'],
	},
];

const TOOLS = [
	{
		name: '960 Grid System',
		url: 'https://960.gs/',
		description:
			'The 960 Grid System is an effort to streamline web development workflow by providing commonly used dimensions, based on a width of 960 pixels. There are two variants: 12 and 16 columns, which can be used separately or in tandem',
		createdAt: new Date(2008, 0, 1),
		tags: ['tools'],
	},

	{
		name: 'Pattern Primer',
		url: 'https://github.com/adactio/Pattern-Primer',
		description: 'Generating styled markup from a folder of markup snippets.',
		createdAt: new Date(2011, 10, 19),
		tags: ['tools'],
	},
	{
		name: 'Atomizer',
		url: 'https://acss.io/',
		description:
			'Atomizer is an unopinionated CSS utility library for modern websites. Just add classes like D(f) and Fz(1.5rem) to your markup to efficiently style your website.',
		createdAt: new Date(2014, 8, 28),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/acss-io/atomizer',
			},
		],
		tags: ['tools'],
	},
	{
		name: 'Styled System',
		url: 'https://styled-system.com/',
		description: 'Style props for rapid UI development',
		createdAt: new Date('2017-06-11'),
		tags: ['tools', 'react'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/styled-system/styled-system',
			},
		],
	},
	{
		name: 'Theme UI: The Design Graph Framework',
		url: 'https://theme-ui.com/',
		description:
			' Theme UI is a library for creating themeable user interfaces based on constraint-based design principles. Build custom component libraries, design systems, web applications, Gatsby themes, and more with a flexible API for best-in-class developer ergonomics.',
		createdAt: new Date('2019-03-31'),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/system-ui/theme-ui',
			},
		],
		tags: ['tools', 'react'],
	},
	{
		name: 'Rebass',
		url: 'https://rebassjs.org/',
		description: 'REACT PRIMITIVE UI COMPONENTS BUILT WITH STYLED SYSTEM',
		createdAt: new Date('2015-02-08'),
		links: [
			{
				name: 'Github',
				url: 'https://github.com/rebassjs/rebass',
			},
		],
		tags: ['tools', 'react'],
	},

	{
		name: 'CSS Modules',
		url: 'https://github.com/css-modules/css-modules',
		description:
			'A CSS Module is a CSS file in which all class names and animation names are scoped locally by default.',
		createdAt: new Date('2015-05-24'),
		tags: ['tools'],
	},
	{
		name: 'Bourbon',
		url: 'https://www.bourbon.io/',
		description: 'Bourbon is a lightweight Sass tool set',
		createdAt: new Date('2011-01-01'),
		tags: ['tools', 'preprocessors'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/thoughtbot/bourbon/',
			},
		],
	},
	{
		name: 'Susy',
		url: 'https://www.oddbird.net/susy/',
		description:
			'Susy was a responsive layout engine for Sass, before flexbox and CSS grid were available.',
		createdAt: new Date('2009-01-01'),
		tags: ['tools', 'preprocessors'],
		links: [
			{
				name: 'Github',
				url: 'https://github.com/oddbird/susy',
			},
		],
	},
	{
		name: 'React',
		url: 'https://reactjs.org/',
		description:
			'Software engineer Jordan Walke from Facebook announced the creation of the React javascript library (sometimes referred to as React.js or ReactJS) at the JSConf US conference. The open-source React library is designed to make it easier to create user interfaces and UI components for web applications. React can also be used to create single-page or mobile applications. The development and maintenance of the React web framework is currently handled by Facebook along with a large community of independent developers.',
		createdAt: new Date('2013-05-29'),
		tags: ['tools'],
	},
	{
		name: 'CSSTidy',
		url: 'https://csstidy.sourceforge.net/index.php',
		description:
			'CSSTidy is an opensource CSS parser and optimiser. It is available as executeable file (available for Windows, Linux and OSX) which can be controlled per command line and as PHP script (both with almost the same functionality).',
		createdAt: new Date('2005-01-01'),
		tags: ['tools'],
	},
];

const WEBSITES = [
	{
		name: 'CSS Zen Garden',
		url: 'http://www.csszengarden.com/',
		description:
			'The CSS Zen Garden is a World Wide Web development resource "built to demonstrate what can be accomplished visually through CSS-based design."',
		createdAt: new Date('2003-05-01'),
		links: [
			{
				name: 'Wikipedia',
				url: 'https://en.wikipedia.org/wiki/CSS_Zen_Garden',
			},
		],
		tags: ['websites'],
	},
	{
		name: 'A List Apart',
		url: 'https://www.alistapart.com/',
		description:
			'A List Apart is a webzine that explores the design, development, and meaning of web content, with a special focus on web standards and best practices. A List Apart began in 1997 as a mailing list for web designers, moderated and published by Jeffrey Zeldman and Brian Platz.',
		createdAt: new Date('1997-01-01'),
		tags: ['websites'],
	},
	{
		name: 'CSS Wizardry',
		url: 'https://csswizardry.com/',
		description: 'CSS Wizardry is a website launched by Harry Roberts',
		createdAt: new Date('2012-12-16'),
		tags: ['websites'],
	},
	{
		name: 'CSS Tricks',
		url: 'https://css-tricks.com/',
		description:
			'A website launched by Chris Coyier offering quality articles and tutorials on CSS',
		createdAt: new Date('2007-07-04'),
		tags: ['websites'],
	},
	{
		name: 'Smashing Magazine',
		url: 'https://www.smashingmagazine.com/',
		description:
			'Smashing Magazine is an online magazine dedicated to web developers and web designers around the world. It was founded in 2006 by Sven Lennartz (co-founder) and Vitaly Friedman (editor-in-chief) as part of the German-based Smashing Media AG. Since 2012, it also runs web design conferences in Europe and North America, known as SmashingConf (founded by Vitaly Friedman and Marc Thiele).',
		createdAt: new Date('2006-01-01'),
		tags: ['websites'],
	},
	{
		name: 'gridbyexample.com',
		url: 'https://gridbyexample.com/',
		description:
			'This site is a collection of examples, video and other information to help you learn CSS Grid Layout. Developed and maintained by Rachel Andrew.',
		createdAt: new Date('2014-09-05'),
		tags: ['websites'],
	},
];

const data = [
	...ARTICLES,
	...ATOMIC_CSS,
	...BROWSERS,
	...CSS_IN_JS,
	...FRAMEWORKS,
	...METHODOLOGY,
	...PREPROCESSORS,
	...RESETS,
	...STANDARDS,
	...TOOLS,
	...WEBSITES,
];

export default data;
