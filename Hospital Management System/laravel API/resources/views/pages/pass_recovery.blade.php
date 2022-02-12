<html>
    <head></head>
    <body style="background-color:Dodgerblue; max-width: max-content; margin: auto;">
    <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <h3 style="color:rgb(0,0,0);"><b>Enter your Username & New password <br> *Remember this password* ,It is confirm password </b></h3>
        <form action="{{route('recovery.submit')}}" class="col-md-6" method="post">
        {{csrf_field()}}
            <table>
                <tr>
                    <td>Username</td>
                    <td>
                    <input type="text" name="username" placeholder="ID user Number"><br>
                    @error('username')
                    <span class="text-danger">{{$message}}</span>
                    @enderror
                    </td>
                </tr>
                <tr>
                    <td>Password</td>
                    <td>
                    <input type="text" name="password" placeholder="Enter New Password"><br>
                    @error('password')
                    <span class="text-danger">{{$message}}</span>
                    @enderror
                    </td>
                </tr>
                <tr>
                    <td align="middle" colspan="2"><input type="submit" class="btn btn-success" value="submit"></td>
                </tr>
            </table>

        </form>

    </body>
</html>