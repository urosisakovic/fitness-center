<template>
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Trainings</h3>
        </div>

        <ul class="list-unstyled components">
            <li>
                <a href="#yoga-submenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle-sb">Yoga</a>
                <ul class="collapse list-unstyled" id="yoga-submenu">
                    <li><router-link to="/services/training/yoga">Yoga Schedule</router-link></li>
                    <li><router-link to="/services/training/yoga/yoga-1">Yoga1</router-link></li>
                    <li><router-link to="/services/training/yoga/yoga-2">Yoga2</router-link></li>
                    <li><router-link to="/services/training/yoga/yoga-3">Yoga3</router-link></li>
                </ul>
            </li>

            <li>
                <a href="#pilates-submenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle-sb">Pilates</a>
                <ul class="collapse list-unstyled" id="pilates-submenu">
                    <li><router-link to="/services/training/pilates">Pilates Schedule</router-link></li>
                    <li><router-link to="/services/training/pilates/pilates-1">Pilates1</router-link></li>
                    <li><router-link to="/services/training/pilates/pilates-2">Pilates2</router-link></li>
                    <li><router-link to="/services/training/pilates/pilates-3">Pilates3</router-link></li>
                </ul>
            </li>

            <li>
                <a href="#core-submenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle-sb">Core</a>
                <ul class="collapse list-unstyled" id="core-submenu">
                    <li><router-link to="/services/training/core">Core Schedule</router-link></li>
                    <li><router-link to="/services/training/core/core-1">Core1</router-link></li>
                    <li><router-link to="/services/training/core/core-2">Core2</router-link></li>
                    <li><router-link to="/services/training/core/core-3">Core3</router-link></li>
                </ul>
            </li>

            <li>
                <a href="#cardio-submenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle-sb">Cardio</a>
                <ul class="collapse list-unstyled" id="cardio-submenu">
                    <li><router-link to="/services/training/cardio">Cardio Schedule</router-link></li>
                    <li><router-link to="/services/training/cardio/cardio-1">Cardio1</router-link></li>
                    <li><router-link to="/services/training/cardio/cardio-2">Cardio1</router-link></li>
                    <li><router-link to="/services/training/cardio/cardio-3">Cardio1</router-link></li>
                </ul>
            </li>
        </ul>
    </nav>
</template>