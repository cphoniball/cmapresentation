#Responsive sites - a presentation to the College Media Association 2014 Summer Workshops (Digital Media track)


##Introduction

I'm Chris, and I'll be talking to you today about responsive design. 

##Who is this guy 

 * Web developer at Hammock, Inc. 
 * Graduated Vanderbilt 2013 with degrees in philosophy and math 
 * Photo editor of Vanderbilt Hustler for 6 months
 * Editor-in-chief of Vanderbilt Hustler for 18 months

##What is responsive design? 

Responsive design is creating a website in such a way that it is able to adapt to any size screen that it may be displayed on. 

You'll commonly see responsive design abbreviated as RWD (Responsive Web Design) but this makes me think of rear-wheel drive cars, so I'm going to be typing out responsive design for the rest of this presentation. 

##A little bit of history 

For the first 15 or 20 years of the web, there was only one screen the worry about - the one on your desktop computer. Since screens were pretty standard in size, designers would use a baseline width - say, 480 or 600 pixels - and create their design on that. 

Smartphones changed that, as they opened up the web to smaller and smaller screens. Suddenly you could view a full desktop website on a screen little bigger than your palm. While smartphones' browsers allow you to pinch and zoom around the site, this is usually a far from optimal experience, especially with sites that present small tap targets or complex interactions requiring mouse and keyboard. 

##M dot websites

Response design was not always the given that it is today. A competing practice is the m dot website — a completely separate website that is presented instead of the desktop site when you visit on a mobile device. InsideVandy.com does this; visit on a mobile browser and you'll be redirected to m.insidevandy.com. 

While you can still find m dot websites around the web these days, they've fallen out of favor for several reasons. One is maintainability, as it adds a completely separate set of HTML, CSS and JS files to update every time the main website is updated. Additionally, tablets added yet another complication into the mix - should website owners deliver mobile or desktop sites to these in-between devices? Responsive design was the clear way forward. 

##Responsive design 

The term responsive design was officially coined 4 years ago. What is it, actually?

>> Responsive design means creating a website so that it dynamically adapts to the size of the screen that it's being presented on.

I'll go ahead and add a disclaimer here: This is my own personal definition of what responsive design is, phrased so a layman can understand it. What responsive design is exactly is still a topic of debate among the web development community, and there are other emerging practices such as adaptive design that are being confused with responsive design.

At this point the print designers in the room usually freak out, because this means that you can load up the same site on two different devices and get two different layouts. The layout is fluid - it automatically adapts to the constraints of the device displaying it. 

At the most basic level, this means that it responds to the height and width of the screen, but it also often includes things like accommodating touch input and gracefully degrading for older devices. 

In a world with an essential infinity of device sizes, this is the only realistic way to design websites to display well and be functional on all of them. 

##All web design should be responsive

It's not the 90s or early 2000s anymore - there is no standard screen size that you can design for. I work on a 13" laptop at work and a giant, 27" monitor at home. I could pick a size in between that and say that's the standard, but then that leaves me broken designs on both monitors, and it doesn't even begin to address the monitors of my customers and other views. 

Much as print design is exacting and specific due to the medium, designing for the web requires taking into account it's inherit instability and fluidity. Creating your designs to 

##What does this look like? 

That's all very well and good, you say, but what does this look like in practice?

This is SmallBusiness.com, a site I designed and developed for Hammock. 

###Large view
![Small Business Large](/resources/examples/smb-large.png)
###Medium view
![Small Business Medium](/resources/examples/smb-medium.png)
###Small view
![Small Business Small](/resources/examples/smb-small.png)

These static images are just showing you the breakpoints, where the number of columns in the layout change and elements are being removed. In between those breakpoints, the layout responds fluidly - the width of each article changes, based on the width of the screen. If you go to [SmallBusiness.com](http://smallbusiness.com) and resize your screen, you can see it changing as you resize the screen. 

##How is it done? 

The actual process of designing a responsive website is relatively complicated, but here's the gist of it: 

 1. Fluid and relative measurements are used to size typography and elements rather than fixed pixel units. 
 2. Breakpoints are tactically inserted at common device sizes.
 3. Different assets are served to different screens to minimize bandwidth and load time. 

Let's go into a little more depth there. 

##Fluid and relative measurements

The most basic way of sizing an element in CSS is using pixels, like so: 

	.red-box
		width: 300px 
		height: 300px
		background-color: red

This element is static. It doesn't change based on the size of the screen, it's just 300 pixels wide and tall no matter what you do to it. 

Fortunately, there are other options for sizing elements. The way most people start is through percentages. 

	* 
		box-sizing: border-box

	.red-column
		width: 10%
		padding: 0 10px 

This will give a layout with 10 columns of equal size, with 20px of padding between them, regardless of how the window is sized.

##Digital vs. digitized

There's a difference between a digital publication and a digitized publication.

A digitized publication is one that's designed for print, and then exported as a .pdf or some other format and presented in that. You can see digitized publications on sites like issuu.com — many college papers digitize each issue in this fashion. 

A digital publication, on the other hand, is designed from the get-go to live in a digital environment. Rather than being designed in InDesign to be printed onto paper, it should be coded in HTML, CSS and JavaScript to live on the web. 

Digital publications provide several advantages over digitized ones. For one, search engines can index them, where they can't index digitized publications. Mostly, they take advantage of the native capabilities and fluidity of the digital format. You can include interaction, audio and video in a digital publication, things that are impossible in print. 


##Responsive design vs. apps

Native apps aren't going anywhere soon, I don't think. While a native app is a good addition to a news site's mobile strategy, it is not a replacement for responsive design. 

1. You're limiting your reach with a mobile app. 

Only people that download the app are going to have access to it, versus anyone with a smartphone being able to access your website. 

2. Even if you have an app, people are still going to end up on your website. 

And when they do, you don't want to chase them away or force them to download an app. And they will end up on your website, because people use their smartphones to find information via search. That brings us to our final point...

3. You can't find content in apps through Google. 

I don't know about your website, but on most websites I've helped run a majority of the traffic comes from organic search. On smallbusiness.com, about 60% of our traffic comes from search. Creating an app and walling off mobile users from finding that content via search would be a bad growth strategy. 

##Snowfalling

You've probably seen the piece by the New York Times, published in 2012, titled "Snow Fall." It was the first widely-seen example of a new type of story design, which was the result of collaboration between designers, journalists, photographers and developers, to create a web story using all the advantages that the medium makes available. 

As with all good ideas, it was quickly mimicked, and the style became known as "Snowfalling." Medium.com is probably the most successful attempt at bringing something like the snowfall treatment to the masses - while it does not have the level of customization that a true snow fall would, many of the design elements are there. 

You can do this with your own special topics and publications. 

##Snowfalling a special project

Practically speaking, special projects are probably your best bet for the snowfalling treatment. You have the time and resources devoted to them that you don't on regular assignments, and they are in-depth enough to deserve some special treatment. 

[Examples of how to do snowfalling here]

##Snowfalling an issue
