<?php

/**
 * hotels model config
 */

return array(

    'title' => 'Cities',

    'single' => 'City',

    'model' => '\App\City',

    'form_width' =>700,

    'sort' => array(
        'field' => 'id',
        'direction' => 'asc',
    ),
    /**
     * The display columns
     */
    'columns' => array(
        'id',
        'name_en',
        'name_cn',
        'country_id' => array(
            'title' => 'country',
            'relationship' => 'country',
            'select' => '(:table).name_en',
        ),
    ),

    'edit_fields' => array(
        'name_en' => array(
            'title' => 'Name',
            'type' => 'text',
        ),
        'name_cn' => array(
            'title' => '中文名称',
            'type' => 'text',
        ),
        'country' => array(
            'title' => 'Country',
            'type' => 'relationship',
            'name_field' => 'name_en',
        ),
        'desc_en' => array(
            'title' => 'Description',
            'type' => 'textarea',
        ),
        'desc_cn' => array(
            'title' => '中文描述',
            'type' => 'textarea',
        ),
        'slider' => array(
            'title' => 'slider image path',
            'type' => 'text',
        ),
        'slider_caption_en' => array(
          'title' => 'Slider Text',
          'type' => 'textarea',
        ),
        'slider_caption_cn' => array(
          'title' => '幻灯图片文字',
          'type' => 'textarea',
        ),
        'body_en' => array(
            'title' => 'Detailed Description',
            'type' => 'wysiwyg',
        ),
        'body_cn' => array(
            'title' => '详细中文描述',
            'type' => 'wysiwyg',
        ),

    ),

);
