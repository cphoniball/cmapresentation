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

Smartphones changed that, as they opened up the web to smaller and smaller screens. Suddenly you could few a full desktop website on a screen little bigger than your palm. While smartphones' browsers allow you to pinch and zoom around the site, this is usually a far from optimal experience, especially with sites that present small tap targets or complex interactions requiring mouse and keyboard. 

##M dot websites

Response design was not always the given that it is today. A competing practice is the m dot website — a completely separate website that is presented instead of the desktop site when you visit on a mobile device. InsideVandy.com does this; visit on a mobile browser and you'll be redirected to m.insidevandy.com. 

While you can still find m dot websites around the web these days, they've fallen out of favor for several reasons. One is maintainability, as it adds a completely separate set of HTML, CSS and JS files to update every time the main website is updated. Additionally, tablets added yet another complication into the mix - should website owners deliver mobile or desktop sites to these in-between devices? Responsive design was the clear way forward. 

##Responsive design 

The term responsive design was officially coined 4 years ago. What is it, actually?

>> Responsive design means creating a website so that it dynamically adapts to the size of the screen that it's being presented on.

I'll go ahead and add a disclaimer here: This is my own personal definition of what responsive design is, phrases so a layman can understand it. What responsive design is exactly is still a topic of debate among the web development community, and there are other emerging practices such as adaptive design that are being confused with responsive design.

At this point the print designers in the room usually freak out, because this means that you can load up the same site on two different devices and get two different layouts. The layout is fluid - it automatically adapts to the constraints of the device displaying it. 

At the most basic level, this means that it responds to the height and width of the screen, but it also often includes things like accommodating touch input and gracefully degrading for older devices. 

In a world with an essential infinity of device sizes, this is the only realistic way to design websites to display well and be functional on all of them. 

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

