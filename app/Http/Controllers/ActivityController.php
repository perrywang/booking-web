<?php

namespace App\Http\Controllers;

use App\Activity;
use Illuminate\Http\Request;

use App\Http\Requests;
use App\Http\Controllers\Controller;

class ActivityController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $activities = Activity::orderBy('name')->paginate(config('app.page_size'),['id','name_'.$this->lang.' as name','desc_'.$this->lang.' as desc','poster']);
      return view('activity.index',compact('activities'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $activity = Activity::find($id,[
            'id',
            'name_'.$this->lang.' as name',
            'desc_'.$this->lang.' as desc',
            'body_'.$this->lang.' as body',
            'gallery'
        ]);

        return view('activity.detail', compact('activity'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function search(Request $request)
    {
      $query = $request->input('query');
      if(empty($query))
      {
        return redirect('/activities');
      }
      $activities = Activity::orderBy('name')->where('name_en','like','%'.$query.'%')
                                      ->orWhere('name_cn','like','%'.$query.'%')
                                      ->orWhere('desc_en','like','%'.$query.'%')
                                      ->orWhere('desc_cn','like','%'.$query.'%')
                                      ->paginate(config('app.page_size'),['id','name_'.$this->lang.' as name','desc_'.$this->lang.' as desc','poster']);
      $found = !($activities->total() == 0);
      return view('activity.index',compact('activities','found'));
    }

}
