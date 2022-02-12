<html>
    <head></head>
    <body style="background-color:Dodgerblue; max-width: max-content; margin: auto;">
    <br><br><br><br><br><br><br><br><br><br><br><br><br>
        <h3 style="color:rgb(0,0,0);"><b>Enter valuable comment <br> *Your valuable comment help to improve us *</b></h3>
        <form action="{{route('comment.submit')}}" class="col-md-6" method="post">
        {{csrf_field()}}
            <table>
                <tr>
                    <td>Comment</td>
                    <td>
                    <input type="text" name="comment"value="{{old('comment')}}" placeholder="Enter your Comment"><br>
                    @error('comment')
                    <span class="text-danger">{{$message}}</span>
                    @enderror
                    </td>
                </tr>
                <tr>
                    <td>Rate Us</td>
                    <td>
                    <select name="ratting" value="{{old('ratting')}}" class="from-control">
					<option selected disabled>Ratting</option>
					<?php
                    $groups=array("*","**","***","****","*****");
                    $group="";
						foreach($groups as $i)
						{
							if($group == $i)
								echo "<option selected>$i</option>";
							else
								echo "<option>$i</option>";
						}
					?>
				    </select>
                    @error('group')
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