# vue-pilot
A TypeScript library that can be used to execute requests of [Pilot Framework](https://github.com/marcocusano/pilot) or [@Laravel](https://laravel.com/) or any kind of REST API eco-system, using [@Axios](https://axios-http.com/docs/intro).

# Installation
`npm install marcocusano/vue-pilot`

# Import
```TypeScript
import API from 'marcocusano/vue-pilot';
```

# Vue.js Usage
```HTML
<script lang="ts">
import API from 'marcocusano/vue-pilot';
export default {
    props: {
        id: {
            type: Number,
            required: true,
        }
    },
    methods: {
        // GET Request
        index() {
            API.setEndpoint("/my/custom/endpoint");
            API.default().index().then(response => {
                console.log(response);
            })
        },
        // GET Request
        show() {
            API.setEndpoint("/my/custom/endpoint");
            API.default().show(this.id).then(response => {
                console.log(response);
            });
        },
        // POST Request
        post() {
            const data = {
                field1: "Hi!",
                field2: 1234,
                field3: true
            };
            API.setEndpoint("/my/custom/endpoint");
        },
        // PUT Request
        put() {
            const data = {
                id: this.id, // Optional, depending on your configuration request
                field1: "Hi!",
                field2: 1234,
                field3: true
            };
            API.setEndpoint("/my/custom/endpoint");
            API.put(this.id, data).then(response => {
                console.log(response);
            });
        }
    },
    mounted() {
        this.index(); // Follow the GET Request
        this.show(); // Follow the GET Request
        this.post(); // Follow the POST Request
        this.put(); // Follow the PUT Request
    }
}
</script>
```

# Custom Requests
```TypeScript
// Import requirements and types
import { type Request } from './library/Request'; // Extended AxiosRequest
import { RequestMethod } from '../enums/RequestEnum';

// Setup Data
const data = {
    id: this.id, // Optional, depending on your configuration request
    field1: "Hi!",
    field2: 1234,
    field3: true
};

// Configure your custom request
const request:Request = {
    method: RequestMethod.POST,
    endpoint: "/my/custom/endpoint",
    data: data
};

// Send your custom request
API.execute(request).then(response => {
    console.log(response);
});
```