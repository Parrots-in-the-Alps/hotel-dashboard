# hotel-dashboard

## setup

```bash
npm install
npm run dev # Compile and Hot-Reload for Development
npm run build # Compile and Minify for Production
npm run preview # Preview the production build
```

## API changes

Recommend to use cookie tokens: https://laravel.com/docs/10.x/sanctum#spa-authentication 
But only works when under the same domain...

```php
// in `routes/api.php`:
//https://laravel.com/docs/10.x/sanctum#issuing-mobile-api-tokens

use \App\Models\User;
use \Illuminate\Support\Facades\Hash;
use \Illuminate\Validation\ValidationException;

Route::post('/sanctum/token', function (Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);

    $user = User::where('email', $request->email)->first();

    if (!$user || !Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken("")->plainTextToken;
});
```
