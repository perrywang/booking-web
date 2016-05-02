<div id="paginationWrapper" style="margin-top:3em;text-align:center;">
     {!! (new Landish\Pagination\SemanticUI($items->fragment(isset($anchor)?$anchor:'')->appends(Input::except('page'))))->render() !!}
</div>
