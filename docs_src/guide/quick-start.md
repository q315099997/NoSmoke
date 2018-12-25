# Quick-Start

### 1. Requirements:

* iOS simulator 11.0 and xcode 10.0 and above.
* Android 6.0 and above, supporting both device and simulator. For real device testing please install null-keyboard.
* Running on MAC OS is recommended, which provide the lowest integration cost of tesseract.
* Ensure tesseract has been properly installed on your machine: `brew install tesseract --all-languages`.

### 2. Setup & Run:

##### **Step 1.** Setup Macaca - NoSmoke dependends on the following macaca components:

```
npm i macaca-android -g
npm i macaca-ios -g
npm i macaca-cli -g
npm i macaca-electron -g
```

##### **Step 2.** Setup NoSmoke :\]

Install the nosmoke command line from npmjs

```
npm i nosmoke -g
```

Open the terminal and initialize macaca server `macaca server --verbose`

then in your workspace directory, execute the following command

```
nosmoke -h path-of-your-hook.js -c path-of-your-config.yml
```

For full set of command please check:

```
nosmoke --help

  Usage: nosmoke [options]

  Options:

    -p, --port <d>    port to use (5678 default)
    -u, --udid <s>    udid of device
    -h, --hooks <s>   location of the hook.js file
    -c, --config <s>  location of the configuration file
    -s, --silent      start without opening browser
    --verbose         show more debugging information
    -v, --versions    output version infomation
    -h, --help        output usage information
```

### 3. What you will see

When the npm program starts to execute and browser will automatically open the reporter-monitor, it may take several seconds for the program to start simulator. Once the testing target app installed, the crawler program will start execution and reporter's content will be updated.

If there is an error:

Please kindly [drop an issue](https://github.com/macacajs/NoSmoke/issues)