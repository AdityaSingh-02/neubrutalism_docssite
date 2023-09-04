---
sidebar_position: 1
---

# NeuBrutalismUI Flutter 📱📚

<img src="https://user-images.githubusercontent.com/63138398/225706659-4fa396f3-fc8a-4cdc-bbd4-3600b323db97.svg" alt="Button Preview" /> 

"Neubrutalism UI is a comprehensive UI kit for Flutter that incorporates the principles of Neubrutalism design. With this package, you can easily add beautiful and functional UI components to your Flutter app in a style that emphasizes simplicity and minimalism.

The package includes a variety of UI components such as buttons, cards, forms, and more, each designed with a subtle shadow and rounded corners that add depth and texture to your app. You can customize the appearance of each component to fit the specific needs of your app, including changing the border radius, depth, and color.

Whether you're a beginner or an experienced developer, Neubrutalism UI makes it easy to create elegant and functional UI components in Flutter that align with the principles of Neubrutalism design. With clear and concise documentation and easy installation instructions, you can start using the package in your app today."

## Quick Start 🚀

### Prerequisites

- To use the "neubrutalism_ui" package, you will need to have the following installed:

- Flutter SDK 

- If you do not have Flutter installed on your system, you can download it from the official Flutter website: https://flutter.dev/docs/get-started/install

### Installation 

- Add the "neubrutalism_ui" package to your project's dependencies. You can do this by adding the following line to your pubspec.yaml file:

``` yaml
dependencies:
  neubrutalism_ui: <latest-version>
```
Then, run flutter pub get in your terminal to download the package.


- Import the "neubrutalism_ui" package in your Dart code:


``` dart
import 'package:neubrutalism_ui/neubrutalism_ui.dart';
```


# What's the Difference !!! `v0.2.0` vs `v1.0.0`✨

<table>
<tr>
<td>

```dart
Neubrutalism.neuTextButton(
              buttonColor: Colors.teal,
              buttonHeight: 60,
              borderWidth: 2,
              onPressed: () {
                print("object");
              },
              buttonWidth: 300,
            ),
```
</td>
<td>

```dart
NeuTextButton(
  borderColor: Colors.black,
  shadowColor: Colors.black,
  buttonHeight: 50,
  buttonWidth: MediaQuery.of(context).size.width * 0.5,
  child: Row(
    mainAxisAlignment: MainAxisAlignment.center,
    children: const [
      Padding(
        padding: EdgeInsets.all(8.0),
        child: Text(
          "Hello",
          style: TextStyle(
              fontSize: 20, fontWeight: FontWeight.w600),
        ),
      ),
    ],
   ),
 ),
```
</td>
</tr>
</table>

# Usage

### NeuTextButton with Customization

<table>
<tr>
<td>

```dart
NeuTextButton(
  borderColor: Colors.black,
  shadowColor: Colors.black,
  buttonHeight: 50,
  buttonWidth: MediaQuery.of(context).size.width * 0.5,
  child: Row(
    mainAxisAlignment: MainAxisAlignment.center,
    children: const [
      Padding(
        padding: EdgeInsets.all(8.0),
        child: Text(
          "Hello",
          style: TextStyle(
              fontSize: 20, fontWeight: FontWeight.w600),
        ),
      ),
    ],
   ),
 ),
```
</td>
<td>
<img  src="https://user-images.githubusercontent.com/63138398/225709552-5730bd9b-8e18-40c1-96e2-c45e7422a4c8.png"  alt="img" />
</td>
</tr>
</table>

### The Neu - NeuContainer
The Main reason behind adding this NeuContainer Widget is to allow the Developers to Create Any custom Widgets which maynot be present in the Package, thus giving them full freedom to customize their Widgets without any restrictions.

<table>
<tr>
<td>

```dart
NeuContainer(
    height: 160,
    width: 250,
    child: Column(
      children: [
        const Text(
          "This is NeuContainer",
          style: TextStyle(fontSize: 23),
        ),
        const SizedBox(
          height: 20,
        ),
        Row(
          mainAxisAlignment: MainAxisAlignment.center,
          children: const [
            Icon(
              Icons.accessible_outlined,
              size: 50,
            ),
            Icon(
              Icons.accessible_outlined,
              size: 50,
            ),
            Icon(
              Icons.accessible_outlined,
              size: 50,
            ),
            Icon(
              Icons.accessible_outlined,
              size: 50,
            ),
          ],
        ),
      ],
    ),
  ),
```
</td>
<td>
<img  src="https://user-images.githubusercontent.com/63138398/232233193-01c717a7-c1a6-4c69-b5a7-d8e39d1876eb.png"  alt="" />
</td>
</tr>
</table>

## Authors

* **Deepraj Baidya** - *Flutter SDE Intern* - [Deepraj Baidya](https://github.com/deepraj02) - 🤔
