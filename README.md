# react-hot-carousels

Build your own customized smoking hot Carousels

<br />

[![NPM](https://img.shields.io/npm/v/react-hot-carousel.svg?style=for-the-badge)](https://npmjs.com/package/react-hot-carousel)
[![NPM](https://img.shields.io/github/license/lakshya-dhariwal/react-hot-carousel?style=for-the-badge)](https://npmjs.com/package/react-hot-carousel)
[![NPM](https://img.shields.io/badge/author-lakshya-dhariwal-green?style=for-the-badge)](https://github.com/lakshya-dhariwal)

<br />

## 💡 Project Description

A `carousel` component that renders anything given between the tags, be it an image, text or a custom JSX element!

<br />

## 🔧 Installation

```shell
npm install react-hot-carousel
```

or

```shell
yarn add react-hot-carousel
```

<br />

## 📦 Demo

A [demo](https://lakshya-dhariwal.github.io/react-hot-carousel/) is worth a thousand words!

```tsx
import Carousel from 'react-hot-carousel'

const Example = () => {
  return (

<Carousel
  autoplay={true}
  previousButton={<PreviousBtn/>}
  nextButton={<NextBtn/>}
  navigationIndicator={<Indicator/>}
  activeNavigationIndicator={<ActiveIndicator/>}
  carouselCustomContainerStyles={display:'flex'...}
  navigationIndicatorContainerStyles={display:'flex'...}
  autoPlayInterval={6}>
     <div>...</div>
     <img src="placeholder.jpeg" />
     <img src="placeholder.gif" />
     <SomeComponent />
</Carousel>

  );
};

export default Example;
```

<br />

## 🖇️ Props

| Prop                               | Description                                                                                                             | Type                            |
| ---------------------------------- | ----------------------------------------------------------------------------------------------------------------------- | ------------------------------- |
| Children                           | Elements that will form carousel slides                                                                                 | JSX.Element[]                   |
| previousButton                     | use this prop to over ride default previous slide button with your own styling , without having to add event listeners  | JSX.Element (optional)          |
| nextButton                         | use this prop to over ride default next slide button with your own styling , without having to add event listeners      | JSX.Element (optional)          |
| navigationIndicator                | use this prop to over ride default slide navigation dots with your own styling , without having to add event listeners  | JSX.Element (optional)          |
| activeNavigationIndicator          | use this prop to over ride default active slide indicator with your own styling , without having to add event listeners | JSX.Element (optional)          |
| autoPlay                           | allow autoplaying of styles or not                                                                                      | Boolean                         |
| autoPlayInterval                   | number of seconds in which the next slide appears                                                                       | number (optional) default 3 sec |
| carouselCustomContainerStyles      | Give your own styles to carousel container                                                                              | React.CSSProperties (optional)  |
| navigationIndicatorContainerStyles | Give your own styles to navigation dots container                                                                       |                                 |

<br />

## 🚨 Forking this repo

Many people have contacted us asking if they can use this code for their own websites. The answer to that question is usually "yes", with attribution. There are some cases, such as using this code for a business or something that is greater than a personal project, that we may be less comfortable saying yes to. If in doubt, please don't hesitate to ask us.

We value keeping this site open source, but as you all know, _**plagiarism is bad**_. We spent a non-negligible amount of effort developing, designing, and trying to perfect this iteration of our website, and we are proud of it! All we ask is to not claim this effort as your own.

So, feel free to fork this repo. If you do, please just give us proper credit by linking back to this repo, https://github.com/lakshya-dhariwal/react-hot-carousel. Refer to this handy [quora post](https://www.quora.com/Is-it-bad-to-copy-other-peoples-code) if you're not sure what to do. Thanks!

<br />

## 📜 License

`react-hot-carousel` is available under the MIT license. See the `LICENSE` file for more info.

<br />
---

Ma
