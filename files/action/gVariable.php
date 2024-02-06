<?php
class GVariable {
    public static $brhead;
    public static $brheadId;
    public static $empname;
    public static $empId;

    public function __get($property) {
        if (property_exists($this, $property)) {
        return $this->$property;
        }
    }

    public function __set($property, $value) {
        if (property_exists($this, $property)) {
        $this->$property = $value;
        }
        return $this;
    }
}
?>