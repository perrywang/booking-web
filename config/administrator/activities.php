<?php

/**
 * activities model config
 */

return array(

    'title' => 'Activities',

    'single' => 'Activity',

    'model' => '\App\Activity',

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
        'city' => array(
            'title' => 'city',
            'relationship' => 'city',
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
        'city' => array(
            'title' => 'city',
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
