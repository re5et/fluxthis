/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var bodyParser = require('body-parser');
var express = require('express');
var app = express();

app.get('/cat', function (req, res) {

    var message = JSON.stringify({
        cat: 'purr'
    });

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Content-Size': message.length
    });

    res.end(message);
});

app.post('/dog', function (req, res) {
    var message = JSON.stringify({
        cat: 'purr'
    });

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Content-Size': message.length
    });

    res.end(message);
});

app.post('/mirror/:param1/:param2', bodyParser.json(), mirror);
app.post('/mirror', bodyParser.json(), mirror);
app.use(express.static('./'));

app.listen(21029);

function mirror (req, res) {
    var message = JSON.stringify({
        query: req.query,
        params: req.params,
        body: req.body
    });

    res.writeHead(200, {
        'Content-Type': 'application/json',
        'Content-Size': message.length
    });

    res.end(message);
}
