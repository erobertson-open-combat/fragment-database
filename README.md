### Fragment database

- Stores game fragment for export as text
- Pushes fragment data to a dynamodb database where it can be accessed easily by other aspects of the application

use : 
```
    # compile
    tsc

    # push to dynamo
    node push.js

    # then you can require the data through a get api directly and eval to get the functions
```
