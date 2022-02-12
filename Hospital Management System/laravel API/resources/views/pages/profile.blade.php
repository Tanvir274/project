@extends('layouts.app')
@section('pataint')
  <table class="table table-borded">
      <tr>
          <td>Name</td>
          <td>Username</td>
          <td>Password</td>
          <td>Phone</td>
          <td>Email</td>
          <td>Blood Group</td>
          <td>DOB</td>
          <td>Address</td>
          <td>Change</td>
      </tr>
      
      <tr>
          <td>{{$profile->name}}</td>
          <td>{{$profile->username}}</td>
          <td>{{$profile->password}}</td>
          <td>{{$profile->phone}}</td>
          <td>{{$profile->email}}</td>
          <td>{{$profile->group}}</td>
          <td>{{$profile->dob}}</td>
          <td>{{$profile->address}}</td>
          <td><a href="/edit/{{$profile->id}}"><h3 style="background-color:rgb(255, 0, 0);">Edit</h3></td>
      </tr>   
      

  </table>
@endsection