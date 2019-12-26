# tictactoe
A simple tic tac toe game (https://en.wikipedia.org/wiki/Tic-tac-toe#Rules).

# Setup
Clone the proect from this git repository and 
```
yarn install 
```

This should install all the necessary dependencies for react native to run. Go into the project directory and run these commands as well.

```
cd ios
pod install
```

This will install all of the necessary pods and will finish the setup.

# Running App

## As React Native Project
Open a terminal or your preferred IDE and step into the project directory. I use VSC for my preferred IDE since it has a terminal within it. To run the project, type in 
```
react-native run-ios
```
You must be in the root directory of the project folder and the setup must be completed for this to work. Wait for the project to load onto xcode simulator.

## As Xcode Project
Go to the root directory of the project folder and navigate to the "ios" folder. Click on the tictactoe.xcworkspace file and xcode should open with the project. Hit the play button at the top left corner of xcode and the iPhone simulator should open up with the app installed and ready to use.

## Notes
Since I used the ios platform for development, please run as either a react native project on ios or xcode project.

# Constraints

Based on the rules of tic tac toe given in the challenge, these are the constraints for my project

- Player X will always go first.
- Player O will always go second.
- Players are not allowed to change the placement of their icons after their turn has been played. For example, if Player O taps on the top right tile of the game board they cannot change their placement to the bottom left tile. Either a new game must be played or the current game must be finished.
- Spaces on the board that are occupied by a player's icon cannot be changed to a different icon.
- Once a win is triggered, the board will no longer update with any further moves regardless of which player's turn it is. After a win, players can only tap on the "new game" button to cause a new game to begin.
- Players can start a new game at any time during play. If a game has not been finished, a new game can be started. If a game has finished, a new game can also be started.


