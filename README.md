# VanishType

VanishType is a web-based writing application built with Flask. This unique app enhances focus and productivity by automatically erasing text if the user stops typing for more than 60 seconds. It's designed to encourage continuous writing and thought flow.

## Live Version

A live version of VanishType is available at the following link: [https://vanishtype.onrender.com](https://vanishtype.onrender.com).

## Features

- **Auto-Erasing Text**: Text entered in the textarea will vanish after 60 seconds of inactivity.
- **Timer Reset**: Users can manually reset the disappearing timer with a reset button.
- **Minimalist Design**: A clean, distraction-free interface that uses Bootstrap for responsive design.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Python 3.6 or higher
- pip
- Flask
- Flask-Bootstrap

### Installing

A step by step series of examples that tell you how to get a development env running:

1. **Clone the repository**

   ```bash
   git clone https://github.com/BAXTOR95/VanishType.git
   cd VanishType
   ```

2. **Set up a virtual environment** (optional but recommended):

   ```bash
   python -m venv .venv
   source venv/bin/activate  # On Windows use `.venv\Scripts\activate`
   ```

3. **Install the requirements**:

   ```bash
   pip install -r requirements.txt
   ```

4. **Run the application**:

   ```bash
   flask run
   ```

   Open your web browser and go to `http://127.0.0.1:5000/` to see the app in action.

## Usage

Simply start typing in the text area provided on the web page. If you stop typing for more than 60 seconds, the text will disappear. You can reset the timer at any point using the reset button below the textarea.

## Contributing

Contributions are welcome, and any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact

Brian Arriaga - [@BAXTOR95](https://twitter.com/BAXTOR95) - <brian.arriaga@gmail.com>

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details
